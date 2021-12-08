export async function getStaticPaths() {
    return {
        paths: [1, 2, 3, 4, 5].map((id) => ({
            params: {
                id: id.toString()
            }
        })),
        fallback: false
        //   fallback: true, false, or 'blocking' // See the "fallback" section below
    }
};

export async function getStaticProps({ params }) {
    return {
        props: params,
        revalidate: 10
    }
}

const DynamicItemPage = ({ id }) => (

    <div>
        <h1>Dynamic items Fallback Blocking Page: {id}</h1>
    </div>
)


export default DynamicItemPage;