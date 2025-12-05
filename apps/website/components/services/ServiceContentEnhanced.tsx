import Image from 'next/image';
import Link from 'next/link';

interface ContentBlock {
  title: string;
  text: string;
  link?: string;
  linkText?: string;
  image?: string;
  imageAlt?: string;
}

interface ServiceContentEnhancedProps {
  modifier?: 'second' | '';
  blocks: ContentBlock[];
}

export default function ServiceContentEnhanced({
  modifier = '',
  blocks,
}: ServiceContentEnhancedProps) {
  const hasImage = Boolean(blocks[0]?.image);

  return (
    <section
      className={`service-content-enhanced ${
        modifier ? `service-content-enhanced--${modifier}` : ''
      } section`}
    >
      <div className="container">
        <div className="service-content-enhanced__wrapper">
          <div className="service-content-enhanced__left">
            {blocks.map((block, index) => (
              <div key={index} className="service-content-enhanced__block">
                <div className="service-content-enhanced__text">
                  <h2 className="service-content-enhanced__title">
                    {block.title}
                  </h2>
                  {block.text && (
                    <p className="service-content-enhanced__description">
                      {block.text}
                    </p>
                  )}
                  {block.link && (
                    <Link
                      href={block.link}
                      className="service-content-enhanced__link"
                    >
                      {block.linkText || 'Learn more'}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {hasImage && (
            <div className="service-content-enhanced__right">
              <div className="service-content-enhanced__media">
                <Image
                  src={blocks[0].image!}
                  alt={blocks[0].imageAlt || 'Service illustration'}
                  width={640}
                  height={400}
                  loading="lazy"
                  unoptimized={blocks[0].image!.startsWith('http')}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

