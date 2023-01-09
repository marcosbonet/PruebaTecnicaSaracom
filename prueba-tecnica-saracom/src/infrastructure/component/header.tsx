export function Header({ children }: { children: JSX.Element }) {
    return (
        <>
            <header>
                <div>
                    <p> Podcaster</p>
                    <hr></hr>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
}
