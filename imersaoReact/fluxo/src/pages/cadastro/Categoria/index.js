import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '',
  }

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handleChange(event) {
    const { getAttribute, value} = event.target;
    setValue(
      getAttribute('name'), 
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name} </h1>

      <form 
        onSubmit={
          function handleSubmit(event) {
            event.preventDefault();
            setCategories([
              ...categories,
              values
            ]);

            setValues(initialValues)
      }}>
        <FormField 
          value={values.name}
          onChange={handleChange}
        />

        <div>
          <label>
          Descrição:
            <textarea 
              type="text"
              value={values.description}
              name="description"
              onChange={handleChange}
              />
          </label>
        </div>
        <div>
          <label>
          Cor:
            <input
              type="color"
              defaultValue={values.color}
              name="color"
              onChange={handleChange}
              />
          </label>
        </div>

        <button>
          Cadastrar
        </button>
      </form>
      
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;