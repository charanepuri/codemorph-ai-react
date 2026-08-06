import Card from "../../components/common/Card";
import PageHeader from "../../components/common/PageHeader";
import ThemeToggle from "../../components/settings/ThemeToggle";

import "./Settings.css";

function Settings() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Customize your CodeMorph AI experience."
      />

      <div className="settings-grid">
        <Card>
          <h3>Appearance</h3>

          <div className="setting-row">
            <span>Theme</span>

            <ThemeToggle />
          </div>
        </Card>

        <Card>
          <h3>Editor</h3>

          <div className="setting-placeholder">
            Monaco editor preferences will be available in Phase 3.
          </div>
        </Card>

        <Card>
          <h3>AI Model</h3>

          <div className="setting-placeholder">
            AI provider configuration will be added in Phase 4.
          </div>
        </Card>
      </div>
    </>
  );
}

export default Settings;