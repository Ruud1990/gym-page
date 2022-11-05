import React, {useEffect, useState} from 'react'
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const PopularRecipes = () => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        getPopular();
    }, [])

    const getPopular = async () => {
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_RECIPES_KEY}&number=7`);
        const data = await api.json();
        setPopular(data.recipes);
        console.log(data.recipes);
    }


  return (
      <div className='recipes-wrapper'> 
            <h3>popular recipes</h3>
            <Splide
            options={{
                perPage: 4,
                breakpoints: {
                    940: {
                        perPage: 3,
                    },
                    700: {
                        perPage: 2,
                    },
                },
                arrows: false,
                drag: 'free',
                gap: '4rem',
            }}>
    {popular.map((recipe) => {
        return (
        
<SplideSlide key={recipe.id}>


        <div className='recipe-card'>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} className='recipe-img'></img>
            </div>
</SplideSlide>

        );
    } )}</Splide>
    </div>
  )
}

export default PopularRecipes;