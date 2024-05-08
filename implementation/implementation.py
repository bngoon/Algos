def bonAppetit(bill, k, b):
    s = sum(bill)
    charges = (s - bill[k]) // 2
    
    if b == charges:
        print("Bon Appetit")
    else:
        print(b - charges)

bill = [3, 10, 2, 9]  # Cost of each item ordered
k = 1  # Anna didn't eat the item at index 1 (10)
b = 12  # Anna contributed 12 dollars

bonAppetit(bill, k, b)