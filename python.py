import time

while True:
    # Obtenemos la hora actual del sistema
    hora_actual = time.strftime("%H:%M:%S")
    
    # Imprimimos la hora en la consola
    print(hora_actual, end="\r")
    
    # Esperamos un segundo antes de volver a obtener la hora
    time.sleep(1)
