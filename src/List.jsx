import PropTypes from 'prop-types'



function List({title, description, done}) {
	
	return (
		<div className="card-list">
			<h2>{title}</h2>
			<h4>{description}</h4>
			<p>{done? 'Concluido' : 'Não Concluido'}</p>
		</div>
	)
}

List.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string.isRequired,
	done: PropTypes.bool
}

export default List;