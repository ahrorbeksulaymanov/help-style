const Intro = () => {
    return (
        <main className="container mx-auto py-12 px-4">
            <section>
                <h1 className="text-4xl font-bold mb-5">CSS Grid Layout Builder</h1>
                <p className="text-lg">
                    The <strong>CSS Grid Layout Builder</strong> is an interactive tool designed to help developers and designers create 
                    custom grid layouts quickly and efficiently. This tool allows for flexible and intuitive grid customization 
                    without the need for manual coding.
                </p>
            </section>

            <hr className="my-6 border-gray-300" aria-hidden="true" />

            <section aria-labelledby="how-it-works">
                <h2 id="how-it-works" className="text-3xl font-bold mb-5">How It Works?</h2>
                <ol className="space-y-4 list-none list-inside">
                    <li>🔹 <strong>Customize Columns, Rows, and Gaps</strong> – Adjust the number of columns, rows, and spacing (gap) to structure your grid.</li>
                    <li>🔹 <strong>Add New Elements</strong> – Click on an empty grid cell (<span aria-hidden="true">+</span> button) to insert a new item into the layout.</li>
                    <li>🔹 <strong>Resize Elements</strong> – Use the resizable handle at the bottom-right corner to adjust the size of each grid item.</li>
                    <li>🔹 <strong>Drag and Drop to Reposition</strong> – Move elements freely across the grid by dragging and dropping them into place.</li>
                    <li>🔹 <strong>Copy the Generated Code</strong> – Once satisfied, copy the auto-generated HTML and CSS code and paste it into your project.</li>
                </ol>
            </section>
        </main>
    );
};

export default Intro;