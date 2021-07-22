export const getStaticPaths = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await res.json();

    // map data to an array of path objects with params (name)

    const paths = data.results.map(ninja => {
        return {
            params: { id: ninja.name.toString() }
        }
    });

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    const data = await res.json();

    return {
        props: { ninja: data }
    }
}

const Details = ({ ninja }) => {
    return (
        <div>
            <h1>{ ninja.name }</h1>
        </div>
    );
}

export default Details;
