import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.sass']
})
export class PublicacionesComponent implements OnInit{

  public boletines =[
    {
      'edicion': 1,
      'fecha': 'Noviembre, 2023',
      'estado': 'open',
      'detalle': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
      'publicaciones':
      [
        {
          'id': 2,
          'volumen': 1,
          'url': 'https://zenodo.org/records/13830097',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Antonio Nariño',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830097'

        },
        {
          'id': 3,
          'volumen': 2,
          'url': 'https://zenodo.org/records/13831011',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Francisco José de Caldas',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13831011'
        },
        {
          'id': 4,
          'volumen': 3,
          'url': 'https://zenodo.org/records/13830173',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Tecnica Industrial Gerardo Valencia Cano',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830173'
        },
        {
          'id': 5,
          'volumen': 4,
          'url': 'https://zenodo.org/records/13830227',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa José María Cabal',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830227'
        },
        {
          'id': 6,
          'volumen': 5,
          'url': 'https://zenodo.org/records/13830357',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa José Ramón Bejarano',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830357'
        },
        {
          'id': 7,
          'volumen': 6,
          'url': 'https://zenodo.org/records/13830414',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Juan José Rondón',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830414'
        },
        {
          'id': 8,
          'volumen': 7,
          'url': 'https://zenodo.org/records/13830504',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Escuela Normal Superior Juan Ladrilleros',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830504'
        },
        {
          'id': 9,
          'volumen': 8,
          'url': 'https://zenodo.org/records/13830544',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa La Anunciación',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830544'
        },
        {
          'id': 10,
          'volumen': 9,
          'url': 'https://zenodo.org/records/13830570',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Las Américas',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830570'
        },
        {
          'id': 11,
          'volumen': 10,
          'url': 'https://zenodo.org/records/13830592',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Liceo del Pacífico',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830592'
        },
        {
          'id': 12,
          'volumen': 11,
          'url': 'https://zenodo.org/records/13830643',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Pablo Emilio Carvajal',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830643'
        },
        {
          'id': 13,
          'volumen': 12,
          'url': 'https://zenodo.org/records/13830676',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Pascual de Andagoya',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830676'
        },
        {
          'id': 14,
          'volumen': 13,
          'url': 'https://zenodo.org/records/13830904',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa República de Venezuela',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830904'
        },
        {
          'id': 15,
          'volumen': 14,
          'url': 'https://zenodo.org/records/13830918',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa San Rafael',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830918'
        },
        {
          'id': 16,
          'volumen': 15,
          'url': 'https://zenodo.org/records/13830938',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa San Vicente',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830938'
        },
        {
          'id': 17,
          'volumen': 16,
          'url': 'https://zenodo.org/records/13830957',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Simón Bolívar',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830957'
        },
        {
          'id': 18,
          'volumen': 17,
          'url': 'https://zenodo.org/records/13830979',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Teofílo Roberto Potes',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830979'
        },
        {
          'id': 19,
          'volumen': 18,
          'url': 'https://zenodo.org/records/13830984',
          'date': 'Boletín 1. Noviembre, 2023',
          'title': 'Insights. Tecnología, Sociedad y Educación',
          'subtitle': 'Institución Educativa Termarit',
          'text': 'En un mundo en constante evolución tecnológica y social, el acceso y la apropiación de las TIC juegan un papel crucial en la construcción de sociedades más informadas, inclusivas y resilientes. Diseñado con el compromiso de servir como puente entre la investigación y la acción, una publicación para compartir de forma clara y accesible, los avances más recientes de nuestros proyectos en el Grupo de Investigación e Innovación en TIC (GI2T).',
          'doi': '10.5281/zenodo.13830984'
        },
      ]
    }
  ]


  public publicaciones = [
    {
      'id': 1,
      'url': 'https://doi.org/10.5281/zenodo.12754339',
      'date': 'Noviembre, 2023',
      'title': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional. Un estudio en el Distrito de Buenaventura',
      'subtitle': 'Documento de Trabajo',
      'text': 'Documento de trabajo, centrado en el uso y acceso de las TIC (Tecnologías de la Información y la Comunicación) entre estudiantes de educación media vocacional en el distrito de Buenaventura, es fruto del esfuerzo conjunto del Grupo de Investigación e Innovación Tecnológica (GI2T). Este estudio se enfoca en caracterizar el acceso y uso de las TIC por parte de los estudiantes de instituciones educativas públicas urbanas de dicho distrito. Durante el último semestre de 2022, con la colaboración de estudiantes del semillero Uso Acceso y Apropiación (UA2) del programa de ingeniería de sistemas, se diseñaron y aplicaron instrumentos de recolección de datos, proporcionando una perspectiva detallada y basada en evidencias sobre la situación actual.'
    },
  ]

  constructor(private renderer2: Renderer2, private titleService: Title) { }
  ngOnInit(): void {
    this.setPageTitle('GI2T: Publicaciones');
    this.addJsonLdSchema();
  }

  private setPageTitle(title: string) {
    this.titleService.setTitle(title);
  }

  private addJsonLdSchema() {
    const script = this.renderer2.createElement('script');
    script.type = 'application/ld+json';

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": this.publicaciones.map((item, index) => ({
        "@type": "CreativeWork",
        "position": index + 1,
        "name": item.title,
        "description": item.text,
        "url": item.url,
        "datePublished": item.date,
        "headline": item.subtitle,
        "image": `assets/images/publicaciones/doc${item.id}.webp`
      }))
    };

    script.text = JSON.stringify(jsonLd);
    this.renderer2.appendChild(document.head, script);
  }
}
