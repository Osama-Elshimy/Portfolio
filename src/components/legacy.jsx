import classes from '../styles/components/legacy.scss';

import { useState } from 'react';
import { motion } from 'framer-motion';

import { AiFillEye, AiFillGithub } from 'react-icons/ai';

import omnifood from '../../public/images/projects/Omnifood.png';
import forkify from '../../public/images/projects/forkify.png';
import pigGame from '../../public/images/projects/Pig-Game.png';
import bankist from '../../public/images/projects/Bankist.png';
import bankistWebsite from '../../public/images/projects/bankist-website.png';
import mapty from '../../public/images/projects/mapty.png';

const Projects = () => {
	const [activeFilter, setActiveFilter] = useState('All');
	const [animateCard, setAnimateCard] = useState({
		y: 0,
		opacity: 1,
	});

	// const isSmallScreen = window.innerWidth < 768;

	// console.log(isSmallScreen);

	const projects = [
		{
			title: 'Forkify',
			description:
				'A recipes website allows you to search over 1,000,000 recipe.',
			projectLink: 'https://abdelrahman-forkify.netlify.app/',
			codeLink: 'https://github.com/abdelrhman-ahmed-kamal/forkify/',
			img: forkify,
			tags: ['JavaScript', 'ALL'],
		},
		{
			title: 'omnifood',
			description: 'A restaurant website land page has an awesome design',
			projectLink: 'https://abdelrhman-ahmed-kamal.github.io/omnifood/',
			codeLink: 'https://github.com/abdelrhman-ahmed-kamal/omnifood/',
			img: omnifood,
			tags: ['HTML & CSS', 'ALL'],
		},

		{
			title: 'Bankist',
			description:
				"A simulation for a bank with some interested functionality fake login 'js' '1111'",
			projectLink: 'https://abdelrhman-ahmed-kamal.github.io/bankist/',
			codeLink: 'https://github.com/abdelrhman-ahmed-kamal/bankist/',
			img: bankist,
			tags: ['JavaScript', 'ALL'],
		},
		{
			title: 'Mapty',
			description: 'A simple web application allows you to track your workouts',
			projectLink: 'https://abdelrhman-ahmed-kamal.github.io/mapty/',
			codeLink: 'https://github.com/abdelrhman-ahmed-kamal/mapty/',
			img: mapty,
			tags: ['JavaScript', 'ALL'],
		},

		{
			title: 'bankist website',
			description: 'A simple web application with modern animation',
			projectLink: 'https://abdelrhman-ahmed-kamal.github.io/bankist-website/',
			codeLink: 'https://github.com/abdelrhman-ahmed-kamal/bankist-website/',
			img: bankistWebsite,
			tags: ['JavaScript', 'ALL'],
		},

		{
			title: 'pig game',
			description: 'A simple game with 2 players',
			projectLink: 'https://abdelrhman-ahmed-kamal.github.io/pig-game/',
			codeLink: 'https://github.com/abdelrhman-ahmed-kamal/pig-game/',
			img: pigGame,
			tags: ['JavaScript', 'ALL'],
		},
	];

	const [filterProjects, setFilterProjects] = useState(projects);

	const handleFilter = category => {
		console.log('clicked');
		setActiveFilter(category);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(() => {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (category === 'All') setFilterProjects(projects);
			else {
				setFilterProjects(
					projects.filter(project => project.tags.includes(category))
				);
			}
		}, 500);
	};
	return (
		<section id='projects'>
			<h2 class='h2-heading' onClick={() => console.log('clicked')}>
				projects
			</h2>
			<div className='projects'>
				<div className='app__work-filter'>
					{['All', 'React', 'JavaScript', 'HTML & CSS', 'NodeJs'].map(
						(item, index) => {
							return (
								<div
									key={index}
									onClick={() => handleFilter()}
									className={`app__work-filter-item app__flex ${
										activeFilter === item ? 'item-active' : ''
									}`}>
									{item}
								</div>
							);
						}
					)}
				</div>

				<motion.div
					animate={animateCard}
					transition={{ duration: 0.5, delayChildren: 0.5 }}
					className='app__work-portfolio'>
					{filterProjects.map((work, index) => (
						<div className='app__work-item app__flex' key={index}>
							<div className='app__work-img app__flex'>
								<img src={work.img} alt={work.name} />

								<motion.div
									whileHover={{ opacity: [0, 1] }}
									transition={{
										duration: 0.25,
										ease: 'easeInOut',
										staggerChildren: 0.5,
									}}
									className='app__work-hover app__flex'>
									<a href={work.projectLink} target='_blank' rel='noreferrer'>
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{
												duration: 0.25,
											}}
											className='app__flex'>
											<AiFillEye />
										</motion.div>
									</a>
									<a
										// href={isSmallScreen ? work.projectLink : work.codeLink}
										target='_blank'
										rel='noreferrer'>
										<motion.div
											whileInView={{ scale: [0, 1] }}
											whileHover={{ scale: [1, 0.9] }}
											transition={{
												duration: 0.25,
											}}
											className='app__flex'>
											<AiFillGithub />
										</motion.div>
									</a>
								</motion.div>
							</div>

							<div className='app__work-content app__flex'>
								<h4>{work.title}</h4>
								<p style={{ marginTop: 10 }}>{work.description}</p>

								<div className='app__work-tag app__flex'>
									<p>{work.tags[0]}</p>
								</div>
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};
export default Projects;
