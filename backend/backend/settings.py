
import os
from pathlib import Path
from datetime import timedelta
from dotenv import load_dotenv


load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition
INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.contenttypes',
  'django.contrib.sessions',
  'django.contrib.messages',
  'django.contrib.staticfiles',
  'django.contrib.sites',

  'users',

  'rest_framework',
  'rest_framework_simplejwt.token_blacklist',
  'corsheaders',
  'allauth',
  'allauth.account',
  'allauth.socialaccount',
  'allauth.socialaccount.providers.google',
  'allauth.socialaccount.providers.github'
]

MIDDLEWARE = [
  'django.middleware.security.SecurityMiddleware',
  'django.contrib.sessions.middleware.SessionMiddleware',
  'django.middleware.common.CommonMiddleware',
  'django.middleware.csrf.CsrfViewMiddleware',
  'django.contrib.auth.middleware.AuthenticationMiddleware',
  'django.contrib.messages.middleware.MessageMiddleware',
  'django.middleware.clickjacking.XFrameOptionsMiddleware',

  'corsheaders.middleware.CorsMiddleware',
  'django.middleware.common.CommonMiddleware',
  'allauth.account.middleware.AccountMiddleware'
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
  {
    'BACKEND': 'django.template.backends.django.DjangoTemplates',
    'DIRS': [],
    'APP_DIRS': True,
    'OPTIONS': {
      'context_processors': [
        'django.template.context_processors.debug',
        'django.template.context_processors.request',
        'django.contrib.auth.context_processors.auth',
        'django.contrib.messages.context_processors.messages',
      ],
    },
  },
]

WSGI_APPLICATION = 'backend.wsgi.application'


# Database
DATABASES = {
  'default': {
    'ENGINE': 'django.db.backends.sqlite3',
    'NAME': BASE_DIR / 'db.sqlite3',
  }
}


# Password validation
AUTH_PASSWORD_VALIDATORS = [
  {
    'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
  },
  {
    'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
  },
  {
    'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
  },
  {
    'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
  },
]


# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
STATIC_URL = 'static/'


# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# CORS SETUP
CORS_ALLOW_ALL_ORIGINS = True
""" CORS_ALLOWED_ORIGINS = [
  'http://localhost:5173'
] """


# ALLAUTH SETUP
SITE_ID = 1
SOCIALACCOUNT_LOGIN_ON_GET = True

AUTHENTICATION_BACKENDS = [
  'django.contrib.auth.backends.ModelBackend',    # default from django.
  # 'users.backends.EmailBackend',                  # custom from users
  'allauth.account.auth_backends.AuthenticationBackend'
]

SOCIALACCOUNT_PROVIDERS = {
  'google': {
    'APP': {
      'client_id': os.environ.get('GOOGLE_CLIENT_ID'),
      'secret': os.environ.get('GOOGLE_CLIENT_SECRET'),
      'key': ''
    },
    'SCOPE': [
      'profile',
      'email',
    ],
    'AUTH_PARAMS': {
      'access_type': 'online',
    }
  },
  'github': {
    'APP': {
      'client_id': os.environ.get('GITHUB_CLIENT_ID'),
      'secret': os.environ.get('GITHUB_CLIENT_SECRET'),
      'key': ''
    }
  }
}


# RECAPTCHA SETUP
RECAPTCHA_PUBLIC_KEY = os.environ.get('RECAPTCHA_PUBLIC_KEY')
RECAPTCHA_PRIVATE_KEY = os.environ.get('RECAPTCHA_PRIVATE_KEY')
SILENCED_SYSTEM_CHECKS = ['django_recaptcha.recaptcha_test_key_error']


# EMAILING SETUP
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
DEFAULT_FROM = os.environ.get('DEFAULT_FROM')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD')
EMAIL_PORT = 587
EMAIL_USE_TLS = True


# REDIRECTION LINKS
LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'
LOGIN_URL = 'login'


# MEDIA SETUP
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'


# RESTFRAMEWORK SETUP
# REST_FRAMEWORK = {
#   'DEFAULT_AUTHENTICATION_CLASSES': (
#     'rest_framework_simplejwt.authentication.JWTAuthentication',
#   )
# }


# JWT SETUP
# SIMPLE_JWT = {
#   "ACCESS_TOKEN_LIFETIME": timedelta(minutes=5),
#   "REFRESH_TOKEN_LIFETIME": timedelta(days=90),
#   "ROTATE_REFRESH_TOKENS": True,
#   "BLACKLIST_AFTER_ROTATION": True,
#   "UPDATE_LAST_LOGIN": False,

#   "ALGORITHM": "HS256",
#   "VERIFYING_KEY": "",
#   "AUDIENCE": None,
#   "ISSUER": None,
#   "JSON_ENCODER": None,
#   "JWK_URL": None,
#   "LEEWAY": 0,

#   "AUTH_HEADER_TYPES": ('Bearer',),
#   "AUTH_HEADER_NAME": "HTTP_AUTHORIZATION",
#   "USER_ID_FIELD": "id",
#   "USER_ID_CLAIM": "user_id",
#   "USER_AUTHENTICATION_RULE": "rest_framework_simplejwt.authentication.default_user_authentication_rule",

#   "AUTH_TOKEN_CLASSES": ("rest_framework_simplejwt.tokens.AccessToken",),
#   "TOKEN_TYPE_CLAIM": "token_type",
#   "TOKEN_USER_CLASS": "rest_framework_simplejwt.models.TokenUser",

#   "JTI_CLAIM": "jti",

#   "SLIDING_TOKEN_REFRESH_EXP_CLAIM": "refresh_exp",
#   "SLIDING_TOKEN_LIFETIME": timedelta(minutes=5),
#   "SLIDING_TOKEN_REFRESH_LIFETIME": timedelta(days=1),

#   "TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainPairSerializer",
#   "TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSerializer",
#   "TOKEN_VERIFY_SERIALIZER": "rest_framework_simplejwt.serializers.TokenVerifySerializer",
#   "TOKEN_BLACKLIST_SERIALIZER": "rest_framework_simplejwt.serializers.TokenBlacklistSerializer",
#   "SLIDING_TOKEN_OBTAIN_SERIALIZER": "rest_framework_simplejwt.serializers.TokenObtainSlidingSerializer",
#   "SLIDING_TOKEN_REFRESH_SERIALIZER": "rest_framework_simplejwt.serializers.TokenRefreshSlidingSerializer",
# }




# LATER 
# AUTH_USER_MODEL = 'users.CustomUser'
# PASSWORD_RESET_TIMEOUT = 14400
# DATA_UPLOAD_MAX_MEMORY_SIZE = 5242880   # 5MB