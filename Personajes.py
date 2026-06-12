class Personajes:
    def __init__(self, nombre, edad, vida, arma):
        self.nombre = nombre
        self.edad = edad
        self.vida = vida
        self.arma = arma

    def DecirNombre(self):
        print(f'Hola mi nombre es {self.nombre}')

    def Atacar(self, atacado, arma):
        print(f'{self.nombre} esta atacando a {atacado.nombre} y lo ataco con {arma.nombre}')

    def CambioNombre(self):
        nombrenuevo  = input(f'Ingrese el nuevo nombre de {self.nombre}: ')
        self.nombre = nombrenuevo
        print(f'El nombre nuevo del personaje es {self.nombre}')
