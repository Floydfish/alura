import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const { handleChange, values, clearForm } = useForm(initialValues);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('hostname')
      ? 'http://localhost:8080/categories'
      : 'http://floxu.herokuapp.com/categories';
    fetch(URL)
      .then(async (res) => {
        const answer = await res.json();
        setCategories([
          ...answer,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form
        onSubmit={
          function handleSubmit(event) {
            event.preventDefault();
            setCategories([
              ...categories,
              values,
            ]);

            clearForm();
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

      {categories.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={`${category.titulo}`}>
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
