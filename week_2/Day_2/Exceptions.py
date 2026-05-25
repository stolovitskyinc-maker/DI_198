# valid_flag = False
# while not valid_flag:
#     userage = input("How old are you?")
#     try:    # TRY THIS
#         userage    = int(userage)
#     except: # IF YOU GOT AN ERROR
#         print("Wrong age!")
#     else:   # ELSE
#         valid_flag = True
#     finally:
#         print('There may or may not have been an exception.')

# print("Next year, your age will be",userage+1)
#================================================================================================
# def safe_sum_try(target_list):
#     total = 0
    
#     for item in target_list:
#         try:
#             total += item
#         except TypeError:
#             print(f"Skipping invalid/malicious item: {repr(item)}")
#             continue
#     return total

# my_list = [2, 3, 1, 2, "four", 42, 1, 5, 3, "imanumber"]
# print(safe_sum_try(my_list))  # Output: 59
#=================================================================================================

