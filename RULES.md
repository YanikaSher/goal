# (1) Rules for writing classes in html elements

If you use tailwind styles, then classes should be written like this:

First letters of components name - briefly what it is - action \ property

<b>Example</b>:

```
export const SomeComponent = () => {
    return (
            <main className="sc-text-description">
                <p>This text is a description</p>
            </main>
        )
}

```
