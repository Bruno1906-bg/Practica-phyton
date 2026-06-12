class Personaje:
    def __init__(self,nombre, vida, arma, escudo, pocion):
        self.nombre = nombre
        self.vida = vida
        self.arma = arma
        self.escudo = escudo
        self.pocion = pocion


    def DecirNombre(self):
        print(f'Hola mi nombre es {self.nombre}')

    def Atacar(self, atacado, arma):
        print(f'{self.nombre} esta atacando a {atacado.nombre} y lo ataco con {arma.nombre}')
        atacado.vida -= 10
        print(f'La vida restante de {atacado.nombre} es de {atacado.vida}')


    def Defender(self, escudo):
        print(f'{self.nombre} se defendio con {escudo.nombre}')

    def LanzarPocima(self, hechizado, pocion):
        print(f'{self.nombre} lanzo una {pocion.nombre} a {hechizado.nombre}')