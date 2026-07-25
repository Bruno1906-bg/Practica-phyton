# EJERCICIOS EN PYTHON
#PROBLEMA 1
data_input = 25.5
# Tu tarea:
# 1. Verifica si 'data_input' es un entero (int).
# 2. Si es entero, imprime "Es un número entero".
# 3. Si no es entero, verifica si es flotante (float).
# 4. Si es flotante, imprime "Es un número decimal".
# 5. Si no es ninguno de los dos, imprime "Tipo de dato no reconocido".

print(isinstance(data_input, int))
print(isinstance(data_input, float))
print('Es un numero decimal.')

#PROBLEMA 2
raw_score = "85"
# Tu tarea:
# 1. Verifica el tipo de 'raw_score' (debería ser string).
# 2. Conviértelo a entero (int) usando int().
# 3. Suma 5 puntos al valor convertido.
# 4. Imprime: "La nueva puntuación es: [resultado]"

print(raw_score, type(raw_score))
raw_score = (int(raw_score) + 5)
print(f"La nueva puntuacion es {raw_score}") #CONCATENAR  CON F INICIAL Y LLAVES

#PROBLEMA 3 
is_active = True
level = 10
# Tu tarea:
# 1. Si 'is_active' es True Y 'level' es mayor o igual a 10, imprime "Usuario VIP activo".
# 2. Si 'is_active' es True pero 'level' es menor a 10, imprime "Usuario estándar activo".
# 3. Si 'is_active' es False, imprime "Usuario inactivo".
if(is_active and level >= 10):   # SE COLOCA SOLO LA VARIABLE PYTHON EVALUA PREDETERMINADAMENTE SI LA VARIABLE ES = TRU SIN NECESIDAD DE ESCRIBIRLO
    print('Usuario VIP activo')
elif(is_active and level <= 10): #SE COLOCAN PUNTOS EN VEZ DE LLAVES Y EN VEZ DE ELSE IF SE ESCRIBE SOLO ELIF
    print('Usuario estandar activo')
else:
    print('Usuario no encontrado')  

#PROBLEMA 4
emp_id = "MKT-2026-45"

# Tu tarea:
# 1. Usa slicing para extraer el código de departamento (MKT).
# 2. Usa slicing para extraer el año (2026).
# 3. Usa slicing para extraer el número (45).
# 4. Usa una f-string para imprimir: 
#    "Departamento: MKT, Año: 2026, Empleado #: 45"
print(emp_id[0:3])
print(emp_id[4:8])
print(emp_id[-2:])
print(f'Departamento: ')  #PENDIENTE PA MAÑANA 
