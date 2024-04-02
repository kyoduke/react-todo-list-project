function List({title, description, done}) {

	return (
		<div className="card-list">
			<h2>{title}</h2>
			<h4>{description}</h4>
			<p>{done? 'Concluido' : 'Não Concluido'}</p>
		</div>
	)
}

export default List;