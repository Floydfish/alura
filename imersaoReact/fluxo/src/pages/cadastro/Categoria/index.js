import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const URL = "http://localhost:8080/categories"
    fetch(URL)
      .then(async (res) => {
        const answer = await res.json();
        setCategories([
          ...answer,
        ]);
      });
  }, [])

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
        {' '}

      </h1>

      <form
        onSubmit={
          function handleSubmit(event) {
            event.preventDefault();
            setCategories([
              ...categories,
              values,
            ]);

            setValues(initialValues);
          }
        }
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
        />

        <FormField
          label="Descrição da Categoria: "
          type="textarea"
          value={values.description}
          name="description"
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          value={values.color}
          name="color"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && <div>
        Loading...
      </div>}

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
