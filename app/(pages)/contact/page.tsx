import type { Metadata } from 'next';

import ProfessionalContact from '~/components/widgets/ProfessionalContact';

export const metadata: Metadata = {
  title: 'Contact - Morgan Dauterive LLP | Immigration Law Experts',
  description: 'Schedule your free consultation with experienced immigration attorneys. Expert legal representation for DACA, asylum, deportation defense, and more.',
};

const Page = () => {
  return (
    <>
      <ProfessionalContact />
    </>
  );
};

export default Page;
