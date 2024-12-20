/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: 'img/dbt_project_finance.png',
		title: 'DBT + Postgres + ELT + Modelagem',
		skills: ['Dbt', 'Python', 'Postgres','Docker'],
		descripcion:
			'Projeto de ELT com DBT, Postgres, Python e Docker, realizando toda modelagem e transformação para o DW',
		demoURL: '',
		repoURL: 'https://github.com/claytoncampos/pipeline-dbt-postgres',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/proj1.png',
		title: 'ETL + Airflow + API Twitter',
		skills: ['Airflow', 'Python', 'Api', 'Twitter'],
		descripcion:
			'Extração de dados da API do Twitter usando Apache airflow e carregando dados no data lake.',
		demoURL: '',
		repoURL: 'https://github.com/claytoncampos/airflow_etl_twitter.git',
		anim: 'fade-right',
	},
	{
		imgSrc: 'img/proj3.png',
		title: 'Web Scraping + ETL + M Livre',
		skills: ['Python', 'Scrapy','Streamlit','Ml','Sqlite'],
		descripcion:
			'Projeto de ETL com Web scraping do Mercado livre utilizando o framework scrapy e apresentando o resultado com streamlit, faz a raspagem de 2 produtos Tenis masculino e fraldas',
		demoURL: 'https://scrapingml.streamlit.app/',
		repoURL: 'https://github.com/claytoncampos/scraping_ml',
		anim: 'fade-left',
	},
	{
		imgSrc: 'img/proj2.png',
		title: 'Validador de Schema Excel',
		skills: ['Python', 'Streamlit', 'Pydantic','Pytest','Excel'],//<iconify-icon icon="skill-icons:javascript"></iconify-icon>
		descripcion:
			' Validador de schema de arquivos excel para ingestão de dados, utilizando, Pydantic, Pytest e StreamLit',
		demoURL: 'https://validatorschemaexcel.streamlit.app/',
		repoURL: 'https://github.com/claytoncampos/validator_schema_excel',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Coffe Store',
		skills: ['React', 'CSS'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2021/06/copy-of-the-6-best-restaurant-website-templates-1.png',
		title: 'Restaurant',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Airflow:"logos:airflow-icon",
	Python: "devicon:python",
	Api: "eos-icons:api-outlined",
	Twitter: "logos:twitter",
	Streamlit: "devicon:streamlit",
	Pydantic: "simple-icons:pydantic",
	Pytest:"devicon:pytest-wordmark",
	Excel:"vscode-icons:file-type-excel",
	Scrapy:"simple-icons:scrapy",
	Ml:"simple-icons:mercadopago",
	Sqlite:"skill-icons:sqlite",
	Dbt:"logos:dbt",
	Postgres:"devicon:postgresql",
	Docker:"devicon:docker-wordmark"
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
