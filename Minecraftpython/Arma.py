class Arma:
    def __init__(self, nombre, dano):
        self.nombre = nombre
        self.dano = dano

class EspadaHierro(Arma):
    def __init__(self):
        super().__init__("Espada de hierro", 30)

class EspadaMadera(Arma):
    def __init__(self):
        super().__init__("Espada de  madera", 30)

class EspadaDiamante(Arma):
    def __init__(self):
        super().__init__("Espada de  Diamante", 40)
