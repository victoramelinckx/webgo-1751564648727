
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transforma tu negocio con una web lista en un día y soporte 24/7. Ideal para dueños ocupados." cta1="Digitaliza Hoy" />
<How step1Title="Contáctanos" step1Desc="Dinos sobre tu negocio en minutos." step2Title="Creamos tu web" step2Desc="En 24 horas tienes tu sitio listo." step3Title="Aumenta ventas" step3Desc="Digitaliza y vende más con soporte 24/7." />
<Aboutus headline="WebGo: Digitaliza y Crece" subheadline="Transformamos tu negocio para ventas online sin complicaciones técnicas." beneficiotitulo1="Fácil y Rápido" beneficio1="Implementación sencilla y eficiente." beneficiotitulo2="Soporte Completo" beneficio2="Nos ocupamos de todo por ti." />
<Services heading="Transforma Recomendaciones en Ventas Digitales" description="Asdas (Precio: 123) - asda crea tu tienda online y gestiona todo por ti." services={[{"name":"Desarrollo Web Rápido","icon":"bolt","description":"Web lista en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua, siempre disponible."},{"name":"Optimización SEO","icon":"search","description":"Aumenta visibilidad en buscadores."},{"name":"Integración de Pagos","icon":"credit-card","description":"Configura pagos seguros y rápidos."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido que atrae y convierte."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Mide y mejora rendimiento web."}]} />
<BeforeAndAfter subheadline="Transformamos visiones digitales en realidades impresionantes y tangibles." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi negocio si solo vendo por recomendaciones?","respuesta":"WebGo te ayuda a crear una tienda online profesional que extiende tus ventas más allá de las recomendaciones. Con herramientas sencillas y efectivas, te conectamos con más clientes potenciales en Santiago y más allá."},{"pregunta":"¿Qué beneficios ofrece el servicio asdas de WebGo?","respuesta":"El servicio asdas de WebGo te ofrece una solución completa para digitalizar tus ventas por un precio accesible de 123. Esto incluye la creación de una página web optimizada para atraer y convertir visitantes en clientes."},{"pregunta":"¿Es complicado gestionar mi sitio web con WebGo si no tengo tiempo?","respuesta":"No te preocupes. WebGo se encarga de todo el proceso de gestión de tu sitio web, para que puedas centrarte en dirigir tu negocio. Nuestro equipo se ocupa del mantenimiento y las actualizaciones necesarias."},{"pregunta":"¿Qué debo hacer si no sé cómo generar ventas online?","respuesta":"WebGo te ofrece asesoramiento y herramientas para que aprendas a atraer clientes en línea. Desde estrategias de marketing digital hasta la optimización de tu sitio, te ayudamos a dar cada paso hacia el éxito digital."},{"pregunta":"¿Por qué elegir WebGo frente a otras opciones para digitalizar mi negocio?","respuesta":"WebGo entiende las necesidades específicas de dueños de pequeños negocios en Santiago. Ofrecemos un servicio personalizado y accesible que te ayuda a crecer en el entorno digital, sin complicaciones."}]} />
<BookAppointment 
                      heading="Transforma tu negocio hoy" 
                      description="Con WebGo, digitaliza tus ventas fácilmente y llega a más clientes online. Aumenta tus ingresos sin complicaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
