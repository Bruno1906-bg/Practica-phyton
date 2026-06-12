from Personaje import Personaje
from Arma import Arma , EspadaHierro, EspadaDiamante, EspadaMadera
from Pocion import Pocion
from Escudo import Escudo, EscudoHierro, EscudoRoca, EscudoDiamante
from Monstruito import Monstruito


if __name__ == "__main__":
    Arma1 = Arma("Pistolachida", 20)
    Escudo1 = Escudo("Escudo de piedra", 100)
    Pocion1 = Pocion("Pocion de Veneno", 15, "efecto de veneno")
    EscudoHierro = EscudoHierro()
    EscudoRoca = EscudoRoca()
    EscudoDiamante = EscudoDiamante()
    EspadaDiamante = EspadaDiamante()
    EspadaHierro = EspadaHierro()
    EspadaMadera = EspadaMadera()


    Personaje1 = Personaje("Bruno", 100, Arma1, Escudo1, Pocion1)
    Personaje2 = Personaje("Oscar", 100, Arma1, Escudo1, Pocion1)

    Monstruo1 = Monstruito("Mikewazauski", 120)

    Monstruo1.Morder(Personaje2)
    Personaje1.Atacar(Personaje2, Arma1)

    Personaje1.Atacar(Monstruo1, EspadaMadera)

    """Personaje1.Atacar(Personaje2, Arma1)
    Personaje1.Defender(EscudoHierro)
    Personaje2.Defender(EscudoDiamante)
    Personaje1.LanzarPocima(Personaje2,Pocion1)"""
