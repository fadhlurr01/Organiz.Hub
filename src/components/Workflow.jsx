import React from 'react';
import { I18N } from '../data/i18n';

export default function Workflow({ lang }) {
  const t = I18N[lang] || I18N.id;

  return (
    <section id="roadmap" className="section section-dark-alt">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-heading">{t.workflow_title}</h2>
          <p className="section-subheading">{t.workflow_sub}</p>
        </div>

        <div className="workflow-timeline-wrapper">
          <div className="workflow-steps-stream">

            {/* Step 1 */}
            <div className="workflow-step-row" data-step="1">
              <div className="workflow-node emerald">
                <span className="node-num">01</span>
                <div className="node-pulse" />
              </div>
              <div className="workflow-card glass-panel">
                <div className="wf-card-header">
                  <span className="wf-phase-badge emerald">{t.wf_step1_badge}</span>
                  <span className="wf-duration">{t.wf_step1_time}</span>
                </div>
                <h3 className="wf-title">{t.wf_step1_title}</h3>
                <p className="wf-desc">{t.wf_step1_desc}</p>
                <div className="wf-deliverables-box">
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv1}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv2}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv3}</span></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="workflow-step-row reverse" data-step="2">
              <div className="workflow-node blue">
                <span className="node-num">02</span>
                <div className="node-pulse" />
              </div>
              <div className="workflow-card glass-panel">
                <div className="wf-card-header">
                  <span className="wf-phase-badge blue">{t.wf_step2_badge}</span>
                  <span className="wf-duration">{t.wf_step2_time}</span>
                </div>
                <h3 className="wf-title">{t.wf_step2_title}</h3>
                <p className="wf-desc">{t.wf_step2_desc}</p>
                <div className="wf-deliverables-box">
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv4}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv5}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv6}</span></div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="workflow-step-row" data-step="3">
              <div className="workflow-node purple">
                <span className="node-num">03</span>
                <div className="node-pulse" />
              </div>
              <div className="workflow-card glass-panel">
                <div className="wf-card-header">
                  <span className="wf-phase-badge purple">{t.wf_step3_badge}</span>
                  <span className="wf-duration">{t.wf_step3_time}</span>
                </div>
                <h3 className="wf-title">{t.wf_step3_title}</h3>
                <p className="wf-desc">{t.wf_step3_desc}</p>
                <div className="wf-deliverables-box">
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv7}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv8}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv9}</span></div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="workflow-step-row reverse" data-step="4">
              <div className="workflow-node coral">
                <span className="node-num">04</span>
                <div className="node-pulse" />
              </div>
              <div className="workflow-card glass-panel">
                <div className="wf-card-header">
                  <span className="wf-phase-badge coral">{t.wf_step4_badge}</span>
                  <span className="wf-duration">{t.wf_step4_time}</span>
                </div>
                <h3 className="wf-title">{t.wf_step4_title}</h3>
                <p className="wf-desc">{t.wf_step4_desc}</p>
                <div className="wf-deliverables-box">
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv10}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv11}</span></div>
                  <div className="wf-deliv-item"><span className="wf-check">✓</span> <span>{t.wf_deliv12}</span></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
