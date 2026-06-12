from Personajes import Personajes
from Arma import Arma


if __name__ == "__main__":
 Arma1 = Arma("pistola", 20)
 Arma2 = Arma("Cuchillo", 20)

 Personaje1 = Personajes("Bruno", 19, 100, Arma1)
 Personaje2 = Personajes("Jefte", 19, 100, Arma2)

 Personaje1.Atacar(Personaje2, Arma1)