"""
Custom exception handler for consistent API error responses.
"""

import logging
from rest_framework.views import exception_handler
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ValidationError as DjangoValidationError
from rest_framework.exceptions import ValidationError as DRFValidationError

logger = logging.getLogger(__name__)


def custom_exception_handler(exc, context):
    """
    Custom exception handler that provides consistent error response format.
    
    Response format:
    {
        "error": {
            "code": "ERROR_CODE",
            "message": "Human readable message",
            "details": {...}  # Optional additional details
        }
    }
    """
    # Call REST framework's default exception handler first
    response = exception_handler(exc, context)
    
    if response is not None:
        # Log the exception for debugging
        logger.warning(
            f"API Exception: {exc.__class__.__name__} - {str(exc)} - "
            f"View: {context.get('view', 'Unknown')}"
        )
        
        error_response = {
            "error": {
                "code": _get_error_code(exc),
                "message": _get_error_message(exc, response),
            }
        }
        
        # Add details for validation errors
        if isinstance(exc, (DRFValidationError, DjangoValidationError)):
            error_response["error"]["details"] = response.data
        
        response.data = error_response
    
    return response


def _get_error_code(exc):
    """Map exception to error code."""
    error_codes = {
        'NotAuthenticated': 'AUTHENTICATION_REQUIRED',
        'AuthenticationFailed': 'AUTHENTICATION_FAILED',
        'PermissionDenied': 'PERMISSION_DENIED',
        'NotFound': 'NOT_FOUND',
        'ValidationError': 'VALIDATION_ERROR',
        'Throttled': 'RATE_LIMIT_EXCEEDED',
        'MethodNotAllowed': 'METHOD_NOT_ALLOWED',
    }
    return error_codes.get(exc.__class__.__name__, 'INTERNAL_ERROR')


def _get_error_message(exc, response):
    """Get human-readable error message."""
    if hasattr(exc, 'detail'):
        if isinstance(exc.detail, str):
            return exc.detail
        elif isinstance(exc.detail, dict):
            return "Validation failed. Check details for more information."
        elif isinstance(exc.detail, list):
            return exc.detail[0] if exc.detail else "An error occurred."
    return "An unexpected error occurred."
