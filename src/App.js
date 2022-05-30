import './App.css';

import CPT_SECTION from './components/CPT_SECTION';
import CPT_COLOR_SELECTOR from './components/CPT_COLOR_SELECTOR';
import CPT_INPUT from './components/CPT_INPUT';
import CPT_TEXT_PREVIEW from './components/CPT_TEXT_PREVIEW';
import CPT_ICON_PREVIEW from './components/CPT_ICON_PREVIEW';
import CPT_VERSION from './components/CPT_VERSION';
import CPT_CSS_AREA from './components/CPT_CSS_AREA';

function App() {
  return (
    <div className="App">

      { /* This is the section for the color selectors */ }
      <CPT_SECTION id="color-section" title="COLORS" description="This section is to select and view the colors you want to test!">
        <CPT_COLOR_SELECTOR type="light" isActive={true} hex="#F9F8FC"/>
        <CPT_COLOR_SELECTOR type="primary" isActive={false}  hex="#D9D4E7"/>
        <CPT_COLOR_SELECTOR type="secondary" isActive={false}  hex="#FEC7D7"/>
        <CPT_COLOR_SELECTOR type="tertiary" isActive={false}  hex="#8546F0"/>
        <CPT_COLOR_SELECTOR type="dark" isActive={true}  hex="#0D152A"/>
        <hr/>
        <p style={{fontWeight: 'bold'}}>EXPORT CSS SETTINGS</p>
        <p>Simply copy the contents of the textfield below and insert it into your stylesheet!</p>
        <p>If the field is empty, click <span style={{fontWeight: 'bold'}}>Export</span> this will also <span style={{fontWeight: 'bold'}}>Copy to clipboard</span></p>
        <CPT_CSS_AREA identifier="css-area"/>
      </CPT_SECTION>

      { /* This is the section for the button preview */ }
      <CPT_SECTION id="button-preview-section" title="BUTTON PREVIEW" description="This section shows how the colors would look on each button design">
        
        { /* Primary color button design */ }
        <button className="primary-id-hideable light light-border primary-text underline">Tertiary</button>
        <button className="primary-id-hideable light primary-border primary-text">Secondary</button>
        <button className="primary-id-hideable primary primary-border light-text">Primary</button>

        { /* Secondary color button design */ }
        <button className="secondary-id-hideable light light-border secondary-text underline">Tertiary</button>
        <button className="secondary-id-hideable light secondary-border secondary-text">Secondary</button>
        <button className="secondary-id-hideable secondary secondary-border light-text">Primary</button>

        { /* Tertiary color button design */ }
        <button className="tertiary-id-hideable light light-border tertiary-text underline">Tertiary</button>
        <button className="tertiary-id-hideable light tertiary-border tertiary-text">Secondary</button>
        <button className="tertiary-id-hideable tertiary tertiary-border light-text">Primary</button>

        { /* Dark color button design */ }
        <button className="dark-id-hideable light light-border dark-text underline">Tertiary</button>
        <button className="dark-id-hideable light dark-border dark-text">Secondary</button>
        <button className="dark-id-hideable dark dark-border light-text">Primary</button>

      </CPT_SECTION>

      { /* This is the section for the text preview */ }
      <CPT_SECTION id="text-preview-section" title="TEXT PREVIEW" description="This section shows how the colors would look on text">
        <CPT_INPUT description="Write some text to test in the previews!"/>
        <CPT_TEXT_PREVIEW background="light" first_color="primary" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="primary" first_color="light" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="secondary" first_color="light" second_color="primary" third_color="tertiary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="tertiary" first_color="light" second_color="primary" third_color="secondary" fourth_color="dark"/>
        <CPT_TEXT_PREVIEW background="dark" first_color="light" second_color="primary" third_color="secondary" fourth_color="tertiary"/>
      </CPT_SECTION>

      { /* This is the section for the icon preview */ }
      <CPT_SECTION id="icon-preview-section" title="ICON PREVIEW" description="This section shows how the colors would look on icons">
        <CPT_ICON_PREVIEW background="light" first_color="primary" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="primary" first_color="light" second_color="secondary" third_color="tertiary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="secondary" first_color="light" second_color="primary" third_color="tertiary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="tertiary" first_color="light" second_color="primary" third_color="secondary" fourth_color="dark"/>
        <CPT_ICON_PREVIEW background="dark" first_color="light" second_color="primary" third_color="secondary" fourth_color="tertiary"/>
      </CPT_SECTION>

      { /* This is the section for the updates and fixes history */ }
      <CPT_SECTION title="UPDATES AND FIXES" description="This section is to view the update and fix history of the website">
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
      </CPT_SECTION>
    </div>
  );
}

export default App;
