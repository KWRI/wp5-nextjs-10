const Header = (await import("home/Header")).default;

export default function Layout({ title, children }) {

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.target);
        alert(`from pdp: ${data.get('search')}`)
    }

    return (
        <>
            <Header title={title} handleSubmit={handleSubmit} />
            <main>{children}</main>
        </>
    )
}