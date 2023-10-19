import TextExpander from "./components/TextExpander";

function App() {
  return (
    <div>
      <TextExpander>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
        nesciunt! Recusandae dolorem harum deserunt illum maxime, mollitia quam
        consequuntur impedit ut architecto non tempora odit temporibus
        voluptates obcaecati laborum. Perferendis.
      </TextExpander>

      <TextExpander
        collapsedNumWords={5}
        expandButtonText="Show text"
        collapseButtonText="Collapse text"
        buttonColor="red"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
        accusantium mollitia voluptates excepturi quae nesciunt maxime?
        Voluptatem reiciendis debitis est natus aliquam, optio hic illum
        explicabo. Commodi voluptatibus itaque aliquid exercitationem facilis
        maiores consectetur corrupti. Eius laborum veritatis voluptates nemo
        velit, iure nesciunt voluptas deserunt facere recusandae neque impedit!
        Similique?
      </TextExpander>

      <TextExpander expanded={true}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae numquam
        quis rerum nemo eius mollitia aut, quam dignissimos explicabo delectus
        voluptatum quae accusantium eum! Ab beatae porro vitae eveniet officia
        praesentium numquam corporis fuga cum rerum eaque ipsa laudantium unde,
        harum aliquam recusandae. Dolorum ad illo suscipit soluta ipsa eius.
        Dolorum, ullam quos accusamus totam assumenda exercitationem aspernatur
        iste repellat numquam error, itaque, consequuntur quasi at! Enim,
        consequuntur! Dolores fuga ab voluptatem quo ipsa sint debitis aliquam
        veniam sit ipsum illo quia consequatur quos recusandae voluptas a magni
        adipisci, possimus, sequi vitae esse, excepturi sunt! Dicta nihil fugiat
        excepturi nulla!
      </TextExpander>
    </div>
  );
}

export default App;
