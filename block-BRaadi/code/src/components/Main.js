import Location from './Location';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionOneErrorBoundary from './SectionOneErrorBoundary';
import LocationErrorBoundary from './LocationErrorBoundary';
import SectionTwoErrorBoundary from './SectionTwoErrorBoundary';

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <SectionOneErrorBoundary>
          <SectionOne />
        </SectionOneErrorBoundary>
        <SectionTwoErrorBoundary>
          <SectionTwo />
        </SectionTwoErrorBoundary>
        <LocationErrorBoundary>
          <Location />
        </LocationErrorBoundary>
      </div>
    </section>
  );
}

export default Main;
