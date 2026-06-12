class Escudo:
    def __init__(self, nombre, defensa):
        self.nombre = nombre
        self.defensa = defensa


class EscudoHierro(Escudo):
    def __init__(self):
        super().__init__("Escudo de Hierro", 30)

class EscudoRoca(Escudo):
    def __init__(self):
        super().__init__("Escudo de Roca", 15)

class EscudoDiamante(Escudo):
    def __init__(self):
        super().__init__("Escudo de Diamante", 50)
