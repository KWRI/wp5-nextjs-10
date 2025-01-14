export async function getStaticPaths() {
    return {
        paths: [1, 2, 3, 4, 5, 6].map((id) => ({
            params: {
                id: id.toString()
            }
        })),
        fallback: false
    }
};

export async function getStaticProps({ params }) {
    return {
        props: params
    }
}

const DynamicItemPage = ({ id }) => (

    <div>
        <h1>Dynamic Product Page: {id}</h1>
    </div>
)


export default DynamicItemPage;