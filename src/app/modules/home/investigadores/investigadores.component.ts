import { Component } from '@angular/core';

@Component({
  selector: 'app-investigadores',
  templateUrl: './investigadores.component.html',
  styleUrls: ['./investigadores.component.sass']
})

export class InvestigadoresComponent {
  public users = [
    {
      'id': 1,
      'name': 'sandra patricia rivera guzmán',
      'email': 'sprivera@unipacifico.edu.co',
      'redes': [
        { 'name': 'ORCID', 'url': 'https://orcid.org/0000-0002-1077-7978' },
        { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/sandra-rivera-a624285b/' },
        { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001325710' },
        { 'name': 'Google Academic', 'url': 'https://scholar.google.es/citations?user=jdxXxUgAAAAJ&hl=es' },
      ],
      'produccion':
        {
          'publicaciones': [
            {
              'text': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional',
              'url': 'https://gi2t.org/documents/DocumentoTrabajo.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Antonio Nariño',
              'url': 'https://gi2t.org/documents/boletines/BoletinAntonioNarino.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Francisco José de Caldas',
              'url': 'https://gi2t.org/documents/boletines/BoletinFranciscoJoseCaldas.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Técnica Industrial Gerardo Valencia Cano',
              'url': 'https://gi2t.org/documents/boletines/BoletinGerardoValenciaCano.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José María Cabal',
              'url': 'https://gi2t.org/documents/boletines/BoletinJoseMariaCabal.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José Ramón Bejarano',
              'url': 'https://gi2t.org/documents/boletines/BoletinJoseRamonBejarano.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Juan José Rondón',
              'url': 'https://gi2t.org/documents/boletines/BoletinJuanJoseRondon.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Escuela Normal Superior Juan Ladrilleros',
              'url': 'https://gi2t.org/documents/boletines/BoletinJuanLadrilleros.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa La Anunciación',
              'url': 'https://gi2t.org/documents/boletines/BoletinLaAnunciacion.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Las Américas',
              'url': 'https://gi2t.org/documents/boletines/BoletinLasAmericas.pdf'
            },

          ],

          'software': [
            {
              'name': 'emocioapp',
              'derautor': 'Registro Derechos de Autor: 13-95-449',
              'url': 'emocioapp.palnegocio.co'
            },
            {
              'name': 'Mandanga',
              'derautor': 'Registro Derechos de Autor: 13-22-462'
            },
          ]
        }
      ,
      'experiencia': [
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Director de Programa',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Director Académico',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': 'Mayo 2004',
          'egreso': 'Diciembre 2004',
          'ciudad': 'Guapi - Cauca'
        },
        {
          'cargo': 'Docente Universitario (Hora Catédra)',
          'organizacion': 'Universidad del Valle',
          'ingreso': '2018',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Docente. Diplomado en Docencia Universitaria',
          'organizacion': 'Universidad del Valle',
          'ingreso': 'Agosto 2023',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': 'Modúlo: Uso de las TIC en la educación superior'
        },
        {
          'cargo': 'Docente Diplomado',
          'organizacion': 'Universidad EAN & Fundación Telefónica',
          'ingreso': 'Octubre 2019',
          'egreso': 'Noviembre 2019',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': 'Modúlo: SCRUM'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2011',
          'egreso': 'Diciembre 2011',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2005',
          'egreso': 'Diciembre 2006',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2005',
          'egreso': 'Junio 2006',
          'ciudad': 'Popayan - Cauca'
        },
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2002',
          'egreso': 'Mayo 2004',
          'ciudad': 'Popayan - Cauca'
        },
        {
          'cargo': 'Desarrolador Plataforma Digital para la Integración de los Servicios del Sector Turístico del Distrito (Contratista)',
          'organizacion': 'Univalle – Cámara de Comercio',
          'ingreso': 'Agosto 2019',
          'egreso': 'Noviembre 2019',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Diseño, Desarrollo y despliegue plataforma en línea para la gestión de información de empresas turísticas registradas en la cámara de comercio de Buenaventura.'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
          'organizacion': 'Comité Paro Cívico',
          'ingreso': 'Mayo 2018',
          'egreso': 'Febrero 2019',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Desarrollo, implementación y administrador backend de plataforma online para comité cívico de Buenaventura'
        },
        {
          'cargo': 'Director de Proyecto de Software',
          'organizacion': 'GCReingenieria',
          'ingreso': 'Septiembre 2012',
          'egreso': 'Septiembre 2013',
          'ciudad': 'Bogotá (Remoto)',
          'descripcion': 'Responsable de la planeación estratégica, control y seguimiento de los procesos de desarrollo del sistema para el monitoreo de avances en obras civiles en relación con los planes y la ejecución del presupuesto'
        },
        {
          'cargo': 'Emprendedor',
          'organizacion': 'CLibre I+D',
          'ingreso': 'Marzo 2010',
          'egreso': 'Octubre 2014',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'CFO, CTO, Analista, Desarrollador y administrador plataforma de gestión académica en instituciones educativas (Mandanga). Registro Derechos de autor 1-2009-9773'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
          'organizacion': 'Alcaldía Distrital',
          'ingreso': 'Septiembre 2009',
          'egreso': 'Diciembre 2009',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Implementación sistema de información web para el Anuario Estadístico del Distrito de Buenaventura'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador - Sistema Académico en línea',
          'organizacion': 'Universidad del Pacifico',
          'ingreso': '2008',
          'egreso': '2010',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Arquitecto y Desarrollador de la plataforma académica para matricula y registro de notas de la Universidad del Pacífico'
        },
      ],
      'formacion': [
        {
          'titulo': 'Maestría en Innovación Educativa',
          'institucion': 'Universidad ICESI',
          'fecha': '2023',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'titulo': 'Dirección de Sistemas de Información sobre Software Libre (Becario) - Online',
          'institucion': 'Universitat Oberta de Catalunya',
          'fecha': '2005',
          'ciudad': 'Barcelona - España'
        },
        {
          'titulo': 'Maestría en Administración de Empresas',
          'institucion': 'Fundación Universitaria Maria Cano',
          'fecha': '2004',
          'ciudad': 'Medellín – Antioquia'
        },
        {
          'titulo': 'Especialización en Alta Gerencia',
          'institucion': 'Fundación Universitaria Maria Cano',
          'fecha': '2003',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'Ingeniero de Sistemas',
          'institucion': 'Universidad Cooperativa de Colombia',
          'fecha': '2001',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'SEI-Certified PSP Developer',
          'institucion': 'Carnegie Mellon',
          'fecha': '2014'
        },
        {
          'titulo': 'Diplomado en Desarrollo de Proyectos de Ingeniería de Software Utilizando Herramientas Oracle',
          'institucion': 'Universidad Cooperativa de Colombia',
          'fecha': '2001',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'Diplomado en Formación y Cualificación Docente',
          'institucion': 'Universidad del Pacifico',
          'fecha': '2014',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
        {
          'titulo': 'Diplomado en Competencia para el Desarrollo de las Funciones Sustantivas en la Educación Superior',
          'institucion': 'Universidad del Pacifico',
          'fecha': '2015',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
        {
          'titulo': 'Estrategias Didácticas para la Educación Mediada por TIC',
          'institucion': 'Ministerio de Educación Nacional y Univirtual - Universidad Tecnológica de Pereira',
          'fecha': '2012  ',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
      ]

    },
    {
      'id': 2,
      'name': 'yowanna karina caicedo guerrero',
      'email': 'ykcaicedo@unipacifico.edu.co',
      'redes': [
        { 'name': 'ORCID', 'url': 'https://orcid.org/0009-0005-6805-5782' },
        { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/yowanna-guerrero-a37a9b65/' },
        { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0001617667' },
        { 'name': 'Google Academic', 'url': 'https://scholar.google.es/citations?user=CTk50rkAAAAJ&hl=es' },
      ],
      'produccion':
        {
          'publicaciones': [
            {
              'text': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional',
              'url': 'https://gi2t.org/documents/DocumentoTrabajo.pdf'
            },

            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Liceo del Pacífico',
              'url': 'https://gi2t.org/documents/boletines/BoletinLiceoDelPacifico.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pablo Emilio Carvajal',
              'url': 'https://gi2t.org/documents/boletines/BoletinPabloEmilioCarvajal.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pascual de Andagoya',
              'url': 'https://gi2t.org/documents/boletines/BoletinPascualDeAndagoya.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa República de Venezuela',
              'url': 'https://gi2t.org/documents/boletines/BoletinRepublicaDeVenezuela.pdf'
            },
            {
              'text': ' Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Rafael',
              'url': 'https://gi2t.org/documents/boletines/BoletinSanRafael.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Vicente',
              'url': 'https://gi2t.org/documents/boletines/BoletinSanVicente.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Simón Bolívar',
              'url': 'https://gi2t.org/documents/boletines/BoletinSimonBolivar.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Teófilo Roberto Potes',
              'url': 'https://gi2t.org/documents/boletines/BoletinTeofiloRobertoPotes.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Termarit',
              'url': 'https://gi2t.org/documents/boletines/BoletinTermarit.pdf'
            },
          ],

          'software': [
            {
              'name': 'emocioapp',
              'derautor': 'Registro Derechos de Autor: 13-95-449',
              'url': 'emocioapp.palnegocio.co'
            },
            {
              'name': 'Mandanga',
              'derautor': 'Registro Derechos de Autor: 13-22-462'
            },
          ]
        }
      ,
      'experiencia': [
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Director de Programa',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Director Académico',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': 'Mayo 2004',
          'egreso': 'Diciembre 2004',
          'ciudad': 'Guapi - Cauca'
        },
        {
          'cargo': 'Docente Universitario (Hora Catédra)',
          'organizacion': 'Universidad del Valle',
          'ingreso': '2018',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Docente. Diplomado en Docencia Universitaria',
          'organizacion': 'Universidad del Valle',
          'ingreso': 'Agosto 2023',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': 'Modúlo: Uso de las TIC en la educación superior'
        },
        {
          'cargo': 'Docente Diplomado',
          'organizacion': 'Universidad EAN & Fundación Telefónica',
          'ingreso': 'Octubre 2019',
          'egreso': 'Noviembre 2019',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': 'Modúlo: SCRUM'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2011',
          'egreso': 'Diciembre 2011',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2005',
          'egreso': 'Diciembre 2006',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2005',
          'egreso': 'Junio 2006',
          'ciudad': 'Popayan - Cauca'
        },
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2002',
          'egreso': 'Mayo 2004',
          'ciudad': 'Popayan - Cauca'
        },
        {
          'cargo': 'Desarrolador Plataforma Digital para la Integración de los Servicios del Sector Turístico del Distrito (Contratista)',
          'organizacion': 'Univalle – Cámara de Comercio',
          'ingreso': 'Agosto 2019',
          'egreso': 'Noviembre 2019',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Diseño, Desarrollo y despliegue plataforma en línea para la gestión de información de empresas turísticas registradas en la cámara de comercio de Buenaventura.'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
          'organizacion': 'Comité Paro Cívico',
          'ingreso': 'Mayo 2018',
          'egreso': 'Febrero 2019',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Desarrollo, implementación y administrador backend de plataforma online para comité cívico de Buenaventura'
        },
        {
          'cargo': 'Director de Proyecto de Software',
          'organizacion': 'GCReingenieria',
          'ingreso': 'Septiembre 2012',
          'egreso': 'Septiembre 2013',
          'ciudad': 'Bogotá (Remoto)',
          'descripcion': 'Responsable de la planeación estratégica, control y seguimiento de los procesos de desarrollo del sistema para el monitoreo de avances en obras civiles en relación con los planes y la ejecución del presupuesto'
        },
        {
          'cargo': 'Emprendedor',
          'organizacion': 'CLibre I+D',
          'ingreso': 'Marzo 2010',
          'egreso': 'Octubre 2014',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'CFO, CTO, Analista, Desarrollador y administrador plataforma de gestión académica en instituciones educativas (Mandanga). Registro Derechos de autor 1-2009-9773'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
          'organizacion': 'Alcaldía Distrital',
          'ingreso': 'Septiembre 2009',
          'egreso': 'Diciembre 2009',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Implementación sistema de información web para el Anuario Estadístico del Distrito de Buenaventura'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador - Sistema Académico en línea',
          'organizacion': 'Universidad del Pacifico',
          'ingreso': '2008',
          'egreso': '2010',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Arquitecto y Desarrollador de la plataforma académica para matricula y registro de notas de la Universidad del Pacífico'
        },
      ],
      'formacion': [
        {
          'titulo': 'Maestría en Innovación Educativa',
          'institucion': 'Universidad ICESI',
          'fecha': '2023',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'titulo': 'Dirección de Sistemas de Información sobre Software Libre (Becario) - Online',
          'institucion': 'Universitat Oberta de Catalunya',
          'fecha': '2005',
          'ciudad': 'Barcelona - España'
        },
        {
          'titulo': 'Maestría en Administración de Empresas',
          'institucion': 'Fundación Universitaria Maria Cano',
          'fecha': '2004',
          'ciudad': 'Medellín – Antioquia'
        },
        {
          'titulo': 'Especialización en Alta Gerencia',
          'institucion': 'Fundación Universitaria Maria Cano',
          'fecha': '2003',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'Ingeniero de Sistemas',
          'institucion': 'Universidad Cooperativa de Colombia',
          'fecha': '2001',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'SEI-Certified PSP Developer',
          'institucion': 'Carnegie Mellon',
          'fecha': '2014'
        },
        {
          'titulo': 'Diplomado en Desarrollo de Proyectos de Ingeniería de Software Utilizando Herramientas Oracle',
          'institucion': 'Universidad Cooperativa de Colombia',
          'fecha': '2001',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'Diplomado en Formación y Cualificación Docente',
          'institucion': 'Universidad del Pacifico',
          'fecha': '2014',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
        {
          'titulo': 'Diplomado en Competencia para el Desarrollo de las Funciones Sustantivas en la Educación Superior',
          'institucion': 'Universidad del Pacifico',
          'fecha': '2015',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
        {
          'titulo': 'Estrategias Didácticas para la Educación Mediada por TIC',
          'institucion': 'Ministerio de Educación Nacional y Univirtual - Universidad Tecnológica de Pereira',
          'fecha': '2012  ',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
      ]

    },
    {
      'id': 3,
      'name': 'gonzalo andrés lucio lópez',
      'email': 'glucio@unipacifico.edu.co',
      'redes': [
        { 'name': 'ORCID', 'url': 'https://orcid.org/0000-0003-4265-4558' },
        { 'name': 'Linkedin', 'url': 'https://www.linkedin.com/in/glucio/' },
        { 'name': 'CvLAC', 'url': 'https://scienti.minciencias.gov.co/cvlac/visualizador/generarCurriculoCv.do?cod_rh=0000231967' },
        { 'name': 'Google Academic', 'url': 'https://scholar.google.com/citations?user=5EVxP38AAAAJ&hl=es' },
      ],
      'produccion':
        {
          'publicaciones': [
            {
              'text': 'Explorando el panorama de uso y acceso a las TIC entre estudiantes de media vocacional',
              'url': 'https://gi2t.org/documents/DocumentoTrabajo.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Antonio Nariño',
              'url': 'https://gi2t.org/documents/boletines/BoletinAntonioNarino.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Francisco José de Caldas',
              'url': 'https://gi2t.org/documents/boletines/BoletinFranciscoJoseCaldas.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Técnica Industrial Gerardo Valencia Cano',
              'url': 'https://gi2t.org/documents/boletines/BoletinGerardoValenciaCano.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José María Cabal',
              'url': 'https://gi2t.org/documents/boletines/BoletinJoseMariaCabal.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa José Ramón Bejarano',
              'url': 'https://gi2t.org/documents/boletines/BoletinJoseRamonBejarano.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Juan José Rondón',
              'url': 'https://gi2t.org/documents/boletines/BoletinJuanJoseRondon.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Escuela Normal Superior Juan Ladrilleros',
              'url': 'https://gi2t.org/documents/boletines/BoletinJuanLadrilleros.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa La Anunciación',
              'url': 'https://gi2t.org/documents/boletines/BoletinLaAnunciacion.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Las Américas',
              'url': 'https://gi2t.org/documents/boletines/BoletinLasAmericas.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Liceo del Pacífico',
              'url': 'https://gi2t.org/documents/boletines/BoletinLiceoDelPacifico.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pablo Emilio Carvajal',
              'url': 'https://gi2t.org/documents/boletines/BoletinPabloEmilioCarvajal.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Pascual de Andagoya',
              'url': 'https://gi2t.org/documents/boletines/BoletinPascualDeAndagoya.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa República de Venezuela',
              'url': 'https://gi2t.org/documents/boletines/BoletinRepublicaDeVenezuela.pdf'
            },
            {
              'text': ' Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Rafael',
              'url': 'https://gi2t.org/documents/boletines/BoletinSanRafael.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa San Vicente',
              'url': 'https://gi2t.org/documents/boletines/BoletinSanVicente.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Simón Bolívar',
              'url': 'https://gi2t.org/documents/boletines/BoletinSimonBolivar.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Teófilo Roberto Potes',
              'url': 'https://gi2t.org/documents/boletines/BoletinTeofiloRobertoPotes.pdf'
            },
            {
              'text': 'Boletín Insights. Tecnología, Sociedad y Educación. Caracterización Uso y Accesos a las TIC. Institución Educativa Termarit',
              'url': 'https://gi2t.org/documents/boletines/BoletinTermarit.pdf'
            },
          ],

          'software': [
            {
              'name': 'emocioapp',
              'derautor': 'Registro Derechos de Autor: 13-95-449',
              'url': 'emocioapp.palnegocio.co'
            },
            {
              'name': 'Mandanga',
              'derautor': 'Registro Derechos de Autor: 13-22-462'
            },
          ]
        }
      ,
      'experiencia': [
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Director de Programa',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Director Académico',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': '2006',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad del Pacífico',
          'ingreso': 'Mayo 2004',
          'egreso': 'Diciembre 2004',
          'ciudad': 'Guapi - Cauca'
        },
        {
          'cargo': 'Docente Universitario (Hora Catédra)',
          'organizacion': 'Universidad del Valle',
          'ingreso': '2018',
          'egreso': 'actual',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': ''
        },
        {
          'cargo': 'Docente. Diplomado en Docencia Universitaria',
          'organizacion': 'Universidad del Valle',
          'ingreso': 'Agosto 2023',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': 'Modúlo: Uso de las TIC en la educación superior'
        },
        {
          'cargo': 'Docente Diplomado',
          'organizacion': 'Universidad EAN & Fundación Telefónica',
          'ingreso': 'Octubre 2019',
          'egreso': 'Noviembre 2019',
          'ciudad': 'Buenaventura - Valle del Cauca',
          'descripcion': 'Modúlo: SCRUM'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2011',
          'egreso': 'Diciembre 2011',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2005',
          'egreso': 'Diciembre 2006',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'cargo': 'Docente Universitario (Catédra)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2005',
          'egreso': 'Junio 2006',
          'ciudad': 'Popayan - Cauca'
        },
        {
          'cargo': 'Docente Universitario (Tiempo Completo)',
          'organizacion': 'Universidad Cooperativa de Colombia',
          'ingreso': 'Enero 2002',
          'egreso': 'Mayo 2004',
          'ciudad': 'Popayan - Cauca'
        },
        {
          'cargo': 'Desarrolador Plataforma Digital para la Integración de los Servicios del Sector Turístico del Distrito (Contratista)',
          'organizacion': 'Univalle – Cámara de Comercio',
          'ingreso': 'Agosto 2019',
          'egreso': 'Noviembre 2019',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Diseño, Desarrollo y despliegue plataforma en línea para la gestión de información de empresas turísticas registradas en la cámara de comercio de Buenaventura.'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
          'organizacion': 'Comité Paro Cívico',
          'ingreso': 'Mayo 2018',
          'egreso': 'Febrero 2019',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Desarrollo, implementación y administrador backend de plataforma online para comité cívico de Buenaventura'
        },
        {
          'cargo': 'Director de Proyecto de Software',
          'organizacion': 'GCReingenieria',
          'ingreso': 'Septiembre 2012',
          'egreso': 'Septiembre 2013',
          'ciudad': 'Bogotá (Remoto)',
          'descripcion': 'Responsable de la planeación estratégica, control y seguimiento de los procesos de desarrollo del sistema para el monitoreo de avances en obras civiles en relación con los planes y la ejecución del presupuesto'
        },
        {
          'cargo': 'Emprendedor',
          'organizacion': 'CLibre I+D',
          'ingreso': 'Marzo 2010',
          'egreso': 'Octubre 2014',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'CFO, CTO, Analista, Desarrollador y administrador plataforma de gestión académica en instituciones educativas (Mandanga). Registro Derechos de autor 1-2009-9773'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador (Contratista)',
          'organizacion': 'Alcaldía Distrital',
          'ingreso': 'Septiembre 2009',
          'egreso': 'Diciembre 2009',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Implementación sistema de información web para el Anuario Estadístico del Distrito de Buenaventura'
        },
        {
          'cargo': 'Analista, Diseñador y Desarrollador - Sistema Académico en línea',
          'organizacion': 'Universidad del Pacifico',
          'ingreso': '2008',
          'egreso': '2010',
          'ciudad': 'Buenaventura – Valle del Cauca',
          'descripcion': 'Arquitecto y Desarrollador de la plataforma académica para matricula y registro de notas de la Universidad del Pacífico'
        },
      ],
      'formacion': [
        {
          'titulo': 'Maestría en Innovación Educativa',
          'institucion': 'Universidad ICESI',
          'fecha': '2023',
          'ciudad': 'Cali - Valle del Cauca'
        },
        {
          'titulo': 'Dirección de Sistemas de Información sobre Software Libre (Becario) - Online',
          'institucion': 'Universitat Oberta de Catalunya',
          'fecha': '2005',
          'ciudad': 'Barcelona - España'
        },
        {
          'titulo': 'Maestría en Administración de Empresas',
          'institucion': 'Fundación Universitaria Maria Cano',
          'fecha': '2004',
          'ciudad': 'Medellín – Antioquia'
        },
        {
          'titulo': 'Especialización en Alta Gerencia',
          'institucion': 'Fundación Universitaria Maria Cano',
          'fecha': '2003',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'Ingeniero de Sistemas',
          'institucion': 'Universidad Cooperativa de Colombia',
          'fecha': '2001',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'SEI-Certified PSP Developer',
          'institucion': 'Carnegie Mellon',
          'fecha': '2014'
        },
        {
          'titulo': 'Diplomado en Desarrollo de Proyectos de Ingeniería de Software Utilizando Herramientas Oracle',
          'institucion': 'Universidad Cooperativa de Colombia',
          'fecha': '2001',
          'ciudad': 'Popayán – Cauca'
        },
        {
          'titulo': 'Diplomado en Formación y Cualificación Docente',
          'institucion': 'Universidad del Pacifico',
          'fecha': '2014',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
        {
          'titulo': 'Diplomado en Competencia para el Desarrollo de las Funciones Sustantivas en la Educación Superior',
          'institucion': 'Universidad del Pacifico',
          'fecha': '2015',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
        {
          'titulo': 'Estrategias Didácticas para la Educación Mediada por TIC',
          'institucion': 'Ministerio de Educación Nacional y Univirtual - Universidad Tecnológica de Pereira',
          'fecha': '2012  ',
          'ciudad': 'Buenaventura - Valle del Cauca'
        },
      ]

    },
  ]
}
