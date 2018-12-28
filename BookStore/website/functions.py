from django.shortcuts import render, redirect

import requests, json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, Http404
from django.contrib import messages
import random   

from datetime import datetime
from datetime import timedelta


