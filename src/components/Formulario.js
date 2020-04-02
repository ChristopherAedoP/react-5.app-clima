import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({busqueda , guardaBusqueda,guardarConsultar}) => {

	const [error,guardarError] = useState(false);

	const {ciudad, pais} = busqueda;

	const handleChange = e => {
		//actualizar state

		guardaBusqueda({
			...busqueda,
			[e.target.name] : e.target.value
		})
	};

	    // Cuando el usuario da submit al form
		 const handleSubmit = e => {
			e.preventDefault();
 
			// validar
			if(ciudad.trim() === '' || pais.trim() === '') {
				guardarError(true);
				 return;
			}
 
			guardarError(false);
 
			guardarConsultar(true);
	  }

	return ( 
		
		<form
			onSubmit={handleSubmit}
		>

			{error 
				? <Error mensaje="Todos los campos son obligatorios"/>
				:null
			}
			<div className="input-field col s12">
				<input
					type="text"
					name="ciudad"
					id="ciudad"
					value={ciudad}
					onChange={handleChange}
				/>
				<label htmlFor="ciudad">Ciudad: </label>
			</div>

			<div className="input-field col s12">
				<select
					name="pais"
					id="pais"
					value={pais}
					onChange={handleChange}
				>
					<option value="">-- Seleccione un paìs --</option>
					<option value="CL">Chile</option>
					<option value="US">Estados Unidos</option>
					<option value="MX">México</option>
					<option value="AR">Argentina</option>
					<option value="CO">Colombia</option>
					<option value="CR">Costa Rica</option>
					<option value="ES">España</option>
					<option value="PE">Perú</option>
				</select>
				<label htmlFor="pais">Pais: </label>
			</div>
			<div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Buscar Clima</button>
            </div>
		</form>


	 );
}

Formulario.propTypes = {
	busqueda : PropTypes.object.isRequired,
	guardaBusqueda: PropTypes.func.isRequired,
	guardarConsultar: PropTypes.func.isRequired,
};

export default Formulario;