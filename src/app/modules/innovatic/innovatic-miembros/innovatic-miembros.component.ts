import { Component, OnInit } from '@angular/core';
interface Member {
  name: string;
  institution: string;
  email: string;
  education: string;
  photo: string;
}
@Component({
  selector: 'app-innovatic-miembros',
  templateUrl: './innovatic-miembros.component.html',
  styleUrls: ['./innovatic-miembros.component.sass']
})
export class InnovaticMiembrosComponent implements OnInit {
  visibleMembers: Member[] = []
  members: Member[] = [
    {
      name: "Sandra Patricia Rivera Guzmán",
      institution: "Universidad del Pacífico",
      email: "sprivera@unipacifico.edu.co",
      education: "Ingeniera de Sistemas y Telématica",
      photo: "../../../../assets/images/inv1.png"
    },
    {
      name: "Yowanna Karina Caicedo Guerrero",
      institution: "Universidad del Pacífico",
      email: "ykcaicedo@unipacifico.edu.co",
      education: "Ingeniera de Sistemas",
      photo: "../../../../assets/images/inv2.png"
    },
    {
      name: "Gonzalo Andrés Lucio López",
      institution: "Universidad del Pacífico",
      email: "glucio@unipacifico.edu.co",
      education: "Ingeniero de Sistemas",
      photo: "../../../../assets/images/inv3.png"
    },
    {
      name: "Carlos Anibal Riascos Hurtado",
      institution: "Institución Educativa",
      email: "infomilenio@gmail.com",
      education: "Ingeniero de Sistemas",
      photo: "https://i.pravatar.cc/300?img=4"  // Asegúrate de que esta ruta sea correcta
    },
    {
      name: "Esteban Andrés Díaz Mina",
      institution: "Institución Educativa San Vicente",
      email: "ead1943@gmail.com",
      education: "Ingeniero de Sistemas",
      photo: "https://i.pravatar.cc/300?img=5"  // Asegúrate de que esta ruta sea correcta
    },
    {
      name: "Fredy Javier Mosquera Riascos",
      institution: "Institución Educativa Atanasio Girardot",
      email: "fredy.mosquera@gmail.com",
      education: "Ingeniero de Sistemas",
      photo: "https://i.pravatar.cc/300?img=6"  // Asegúrate de que esta ruta sea correcta
    },
    {
      name: "Carlos Gómez",
      institution: "Instituto Tecnológico del Valle",
      email: "carlos.gomez@itv.edu.co",
      education: "Licenciado en Ingeniería de Sistemas",
      photo: "https://i.pravatar.cc/300?img=7"  // Asegúrate de que esta ruta sea correcta
    }
  ];


  instituciones: any[] = [
    {	name: "UNIVERSIDAD DEL PACÍFICO", escudo: "/assets/images/innovatic/logos/logup.svg"},
    {	name: "ALCALDÍA DISTRITAL DE BUENAVENTURA", escudo: "/assets/images/innovatic/logos/logo_alcaldia.jpg"},
    {	name: "ALFREDO VASQUEZ COBO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "ANTONIO JÓSE DE SUCRE", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "ANTONIO NARIÑO ", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "ATANASIO GIRARDOT", escudo: "/assets/images/innovatic/logos/logo_atanasio.jpg"},
    {	name: "ESTHER ESTELVINA ARAMBURO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "FRANCISCO JAVIER CISNEROS", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "FRANCISCO JÓSE DE CALDAS", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "GERARDO VALENCIA CANO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JAIME ROOCK", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JESUS ADOLESCENTE", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JOSE ACEVEDO Y GOMEZ", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JOSE MARÍA CABAL", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JOSE MARÍA CORDOBA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JOSE RAMÓN BEJARANO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JUAN JOSÉ RONDÓN", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "JUANCHACO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "LA ANUNCIACIÓN", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "LAS AMERICAS", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "LICEO  DEL PACIFICO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "NACHASIN", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "NESTOR URBANO TENORIO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "NIÑO JESUS DE PRAGA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "NONAM", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "NORMAL JUAN LADRILLEROS", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "NUESTRA SEÑORA DEL PERPETUO SOCORRO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "PABLO EMILIO CARVAJAL", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "PASCUAL DE ANDAGOYA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "PATRICIO OLAVE ANGULO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "RAUL OREJUELA BUENO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "REPUBLICA DE VENEZUELA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "ROSA ZARATE DE PEÑA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SAN PEDRO CLAVER", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SAN RAFAEL", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SAN VICENTE", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SANTA TERESITA DEL NIÑO JESÚS", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SANTA CECILIA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SILVANO CAICEDO GIRON", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "SIMON BOLIVAR", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "TEOFILO ROBERTO POTES", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "TERMARIT", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "VASCO  NUÑEZ DE BALBOA", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"},
    {	name: "I.Etnoeducativa SAN ANTONIO", escudo: "https://americadecali.co/wp-content/uploads/2018/07/Logo-americaespecial-300x300.jpg"}
  ]

  constructor(){}
  ngOnInit(): void {
    this.updateVisibleMembers();
    setInterval(() => this.rotateMembers(), 5200);
  }
  /*
  private rotateMembers(): void {
    const firstMember = this.members.shift();

    if (firstMember) {
      this.members.push(firstMember);
      this.applyTransitionEffect();
    }

  }
  */
  private rotateMembers(): void {
    const firstMember = this.members.shift();
    if (firstMember) {
      this.members.push(firstMember);
    }
    this.updateVisibleMembers();
  }

  private updateVisibleMembers(): void {
    this.visibleMembers = this.members.slice(0, 3);
  }

  applyTransitionEffect(): void {
    // Agrega la clase 'oculto' a los elementos que no deben mostrarse
    this.members = this.members.map((member, index) => ({
      ...member,
      oculto: index > 2
    }));
  }

}
