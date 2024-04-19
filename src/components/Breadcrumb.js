import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadcrumbExample({text,url}) {
  return (
    <Breadcrumb className='breadcrumb'>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href={url}>
       {text}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbExample;