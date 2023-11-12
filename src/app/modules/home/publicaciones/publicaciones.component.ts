import { Component } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.sass']
})
export class PublicacionesComponent {
  public publicaciones = [
    {
      'id': 1,
      'url': 'assets/documents/DocumentoTrabajo.pdf',
      'date': 'Noviembre, 2023',
      'title': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional. Un estudio en el Distrito de Buenaventura',
      'subtitle': 'Documento de Trabajo',
      'text': 'Documento de trabajo, centrado en el uso y acceso de las TIC (Tecnologías de la Información y la Comunicación) entre estudiantes de educación media vocacional en el distrito de Buenaventura, es fruto del esfuerzo conjunto del Grupo de Investigación e Innovación Tecnológica (GI2T). Este estudio se enfoca en caracterizar el acceso y uso de las TIC por parte de los estudiantes de instituciones educativas públicas urbanas de dicho distrito. Durante el último semestre de 2022, con la colaboración de estudiantes del semillero Uso Acceso y Apropiación (UA2) del programa de ingeniería de sistemas, se diseñaron y aplicaron instrumentos de recolección de datos, proporcionando una perspectiva detallada y basada en evidencias sobre la situación actual.'
    },
    {
      'id': 2,
      'url': 'assets/documents/boletines/BoletinAntonioNarino.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Antonio Nariño',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 3,
      'url': 'assets/documents/boletines/BoletinFranciscoJoseCaldas.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Francisco José de Caldas',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 4,
      'url': 'assets/documents/boletines/BoletinGerardoValenciaCano.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Tecnica Industrial Gerardo Valencia Cano',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 5,
      'url': 'assets/documents/boletines/BoletinJoseMariaCabal.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa José María Cabal',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 6,
      'url': 'assets/documents/boletines/BoletinJoseRamonBejarano.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa José Ramón Bejarano',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 7,
      'url': 'assets/documents/boletines/BoletinJuanJoseRondon.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Juan José Rondón',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 8,
      'url': 'assets/documents/boletines/BoletinJuanLadrilleros.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Escuela Normal Superior Juan Ladrilleros',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 9,
      'url': 'assets/documents/boletines/BoletinLaAnunciacion.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa La Anunciación',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 10,
      'url': 'assets/documents/boletines/BoletinLasAmericas.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Las Américas',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 11,
      'url': 'assets/documents/boletines/BoletinLiceoDelPacifico.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Liceo del Pacífico',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 12,
      'url': 'assets/documents/boletines/BoletinPabloEmilioCarvajal.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Pablo Emilio Carvajal',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 13,
      'url': 'assets/documents/boletines/BoletinPascualDeAndagoya.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Pascual de Andagoya',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 14,
      'url': 'assets/documents/boletines/BoletinRepublicaDeVenezuela.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa República de Venezuela',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 15,
      'url': 'assets/documents/boletines/BoletinSanRafael.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa San Rafael',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 16,
      'url': 'assets/documents/boletines/BoletinSanVicente.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa San Vicente',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 17,
      'url': 'assets/documents/boletines/BoletinSimonBolivar.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Simón Bolívar',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 18,
      'url': 'assets/documents/boletines/BoletinTeofiloRobertoPotes.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Teofílo Roberto Potes',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
    {
      'id': 19,
      'url': 'assets/documents/boletines/BoletinTermarit.pdf',
      'date': 'Boletín 1. Noviembre, 2023',
      'title': 'Insights. Tecnología, Sociedad y Educación',
      'subtitle': 'Institución Educativa Termarit',
      'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).'
    },
  ]
}
