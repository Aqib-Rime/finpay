export const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-finpay-dark">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-finpay-gray no-underline transition-colors hover:text-finpay-dark"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
