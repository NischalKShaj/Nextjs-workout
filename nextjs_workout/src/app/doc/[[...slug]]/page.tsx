// file to show the catch all segments and same folder is changed to optional catch-all segment

// catch-all segment [...folderName]
// optional catch-all segment [[...folderName]]

const Docs = ({ params }: { params: { slug: string[] } }) => {
  let doc;
  if (params.slug?.length === 2) {
    doc = `viewing document of the feature ${params.slug[0]} and concept ${params.slug[1]}`;
  } else if (params.slug?.length === 1) {
    doc = `viewing document of the feature ${params.slug[0]}`;
  } else {
    doc = "doc home page";
  }
  return (
    <div>
      <h1>{doc}</h1>
    </div>
  );
};

export default Docs;
