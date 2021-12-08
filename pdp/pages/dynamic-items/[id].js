const Header = (await import("home/Header")).default;

export async function getStaticPaths() {
    return {
        paths: [1, 2, 3, 4, 5, 6].map((id) => ({
            params: {
                id: id.toString()
            }
        })),
        fallback: false
        //   fallback: true, false, or 'blocking' // See the "fallback" section below
    }
};

// export async function getStaticProps({ params }) {
//     // params contains the post `id`.
//     // If the route is like /posts/1, then params.id is 1
//     const res = await fetch(`https://.../posts/${params.id}`)
//     const post = await res.json()

//     // Pass post data to the page via props
//     return { props: { post } }
// }

export async function getStaticProps({ params }) {
    return {
        props: params
    }
}

const DynamicItemPage = ({ id }) => (

    <div>
        <Header />
        <h1>Dynamic Product Page: {id}</h1>
    </div>
)


export default DynamicItemPage;