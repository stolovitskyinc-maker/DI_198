from datetime import datetime, timedelta
import time

BIRTHDAY_MONTH = 12
BIRTHDAY_DAY = 2

now = datetime.now()

birthday_this_year = datetime(now.year, BIRTHDAY_MONTH, BIRTHDAY_DAY)

if now > birthday_this_year:
    target_birthday = datetime(now.year + 1, BIRTHDAY_MONTH, BIRTHDAY_DAY)
else:
    target_birthday = birthday_this_year

time_difference = target_birthday - now

days = time_difference.days

hours, remainder = divmod(time_difference.seconds, 3600)
minutes, seconds = divmod(remainder, 60)

print(f"My birthday is in {days} days, and {hours:02d}:{minutes:02d}:{seconds:02d}")
