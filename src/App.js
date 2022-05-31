import './App.css';

/* Utility imports */
import CPT_SECTION from './components/CPT_UTILITY/CPT_SECTION';
import CPT_VERSION from './components/CPT_UTILITY/CPT_VERSION';

/* Color preview imports */
import CPT_COLOR_SELECTOR from './components/CPT_COLOR_PREVIEW/CPT_COLOR_SELECTOR';
import CPT_CSS_AREA from './components/CPT_COLOR_PREVIEW/CPT_CSS_AREA';

/* Button preview imports */
import CPT_BUTTON_SET from './components/CPT_BUTTON_PREVIEW/CPT_BUTTON_SET';

/* Text preview imports */
import CPT_INPUT from './components/CPT_TEXT_PREVIEW/CPT_INPUT';
import CPT_TEXT_PREVIEW from './components/CPT_TEXT_PREVIEW/CPT_TEXT_PREVIEW';

/* Icon preview imports */
import CPT_ICON_PREVIEW from './components/CPT_ICON_PREVIEW/CPT_ICON_PREVIEW';

function App() {
  return (
    <div className="App">

      { /* This is the section for the color selectors */ }
      <CPT_SECTION identifier="color-section" title="COLORS" description="This section is to select and view the colors you want to test!">
        <CPT_COLOR_SELECTOR type="light" isActive={true} hex="#F9F8FC"/>
        <CPT_COLOR_SELECTOR type="primary" isActive={false}  hex="#D9D4E7"/>
        <CPT_COLOR_SELECTOR type="secondary" isActive={false}  hex="#FEC7D7"/>
        <CPT_COLOR_SELECTOR type="tertiary" isActive={false}  hex="#8546F0"/>
        <CPT_COLOR_SELECTOR hasBreaker={false} type="dark" isActive={true}  hex="#0D152A"/>
        <hr/>
        <CPT_CSS_AREA identifier="css-area"/>
      </CPT_SECTION>

      { /* This is the section for the button preview */ }
      <CPT_SECTION identifier="button-preview-section" classes="zero-bottom-padding" title="BUTTON PREVIEW" description="This section shows how the colors would look on each button design">
        <CPT_BUTTON_SET color="primary"/>
        <CPT_BUTTON_SET color="secondary"/>
        <CPT_BUTTON_SET color="tertiary"/>
        <CPT_BUTTON_SET color="dark"/>
      </CPT_SECTION>

      { /* This is the section for the text preview */ }
      <CPT_SECTION identifier="text-preview-section" title="TEXT PREVIEW" description="This section shows how the colors would look on text">
        <CPT_INPUT description="Write some text to test in the previews!"/>
        <CPT_TEXT_PREVIEW background="light" first_color="primary" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="primary" first_color="light" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="secondary" first_color="light" second_color="primary" third_color="tertiary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="tertiary" first_color="light" second_color="primary" third_color="secondary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW hasBreaker={false} background="dark" first_color="light" second_color="primary" third_color="secondary" fourth_color="tertiary"/>
      </CPT_SECTION>

      { /* This is the section for the icon preview */ }
      <CPT_SECTION identifier="icon-preview-section" title="ICON PREVIEW" description="This section shows how the colors would look on icons">
        <CPT_ICON_PREVIEW background="light" first_color="primary" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="primary" first_color="light" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="secondary" first_color="light" second_color="primary" third_color="tertiary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="tertiary" first_color="light" second_color="primary" third_color="secondary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW hasBreaker={false} background="dark" first_color="light" second_color="primary" third_color="secondary" fourth_color="tertiary"/>
      </CPT_SECTION>

      { /* This is the section for the updates and fixes history */ }
      <CPT_SECTION identifier="history-section" classes="zero-bottom-padding" hasBreaker={false} title="UPDATES AND FIXES" description="This section is to view the update and fix history of the website">
        <CPT_VERSION version="1.0.1" description="Added secondary color to preview"/>
        <CPT_VERSION version="1.0.2" description="Added button preview for secondary color"/>
        <CPT_VERSION version="1.0.3" description="Added text preview for secondary color"/>
        <CPT_VERSION version="1.1.0" description="Added icon preview for all colors"/>
        <CPT_VERSION version="1.1.1" description="Added search function for icon preview"/>
        <CPT_VERSION version="1.1.2" description="Added multi-search function for icon preview"/>
        <CPT_VERSION version="1.1.3" description="Fixed icon search bug"/>
        <CPT_VERSION version="1.1.4" description="Added clear button"/>
        <CPT_VERSION version="2.0.0" description="Converted to ReactJS succesfully!"/>
        <CPT_VERSION version="2.0.1" description="Fixed a minor detail"/>
        <CPT_VERSION version="2.0.2" description="Added tertiary color to preview"/>
        <CPT_VERSION version="2.1.0" description="Added randomize button for each color selector"/>
        <CPT_VERSION version="2.2.0" description="Added hide button for each color selector"/>
        <CPT_VERSION version="2.3.0" description="Added css settings export"/>
        <CPT_VERSION version="2.3.1" description="Fixed a minor bug where css settings wouldn't update on randomize button click"/>
        <CPT_VERSION version="2.4.0" description="Redesigned CSS sizes to make it look better"/>
        <CPT_VERSION version="2.4.1" description="Added input validation for text preview"/>
        <CPT_VERSION version="2.4.2" description="Added input validation for color selectors"/>
        <CPT_VERSION version="2.4.3" description="Fixed a bug where input validation wouldn't accept single words"/>
        <CPT_VERSION version="3.0.0" description="Color Palette Tester is finally responsive on desktop!"/>
        <CPT_VERSION version="3.0.1" description="Optimized ReactJS components to improve design"/>
        <CPT_VERSION version="3.0.2" description="Redesigned CSS padding to make it look better"/>
      </CPT_SECTION>
    </div>
  );
}

export default App;
