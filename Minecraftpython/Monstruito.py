class Monstruito:
    def __init__(self,nombre,vida):
        self.nombre = nombre
        self.vida = vida

    def Morder(self, mordido):
        print(f'{self.nombre} mordio a {mordido.nombre}')