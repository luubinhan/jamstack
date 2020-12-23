import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const LegacyWeb = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames('split-wrap');

  const sectionHeader = {
    title: 'Vấn đề với web làm theo cách trước đây',
    paragraph: '',
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div className="split-item-content center-content-mobile">
                <div className="tiles-item reveal-from-bottom">
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="d-flex">
                        <div className="mr-12">
                          <Image
                            src="https://cdn.netlify.com/fb001f4d7d1dbb83e275723b3b562a3185ea55a0/18f04/img/jamstack/server.svg"
                            alt="Features tile icon 01"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div>
                          <h4 className="mt-0 mb-8">Web server</h4>
                          <p className="m-0 text-sm">(Như Apache)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="200"
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="d-flex">
                        <div className="mr-12">
                          <Image
                            src="https://cdn.netlify.com/55d4ed85f9283383ebf440767bbe26bbb4ea1f7a/5d0c7/img/jamstack/application.svg"
                            alt="Features tile icon 02"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div>
                          <h4 className="mt-0 mb-8">Application</h4>
                          <p className="m-0 text-sm">(Như Wordpress)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tiles-item reveal-from-bottom"
                  data-reveal-delay="400"
                >
                  <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                      <div className="d-flex">
                        <div className="mr-12">
                          <Image
                            src="https://cdn.netlify.com/65f1d007167932f0f424c940c048d2a6ca02d557/3eaf7/img/jamstack/database.svg"
                            alt="Features tile icon 03"
                            width={64}
                            height={64}
                          />
                        </div>
                        <div>
                          <h4 className="mt-0 mb-8">Database</h4>
                          <p className="m-0 text-sm">(Như MySQL)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="split-item-content center-content-mobile">
                <h4 className="mt-0 mb-8">
                  Hệ thống ứng dụng và server phức tạp
                </h4>
                <p>
                  Một website truyền thống là một ứng dụng luôn chạy trên phía
                  server, việc này làm tốc độ của website sẽ chậm, nhiều rủi ro
                  về bảo mật và rất tồn kém khi phải đáp ứng số lượng lớn người
                  sử dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

LegacyWeb.propTypes = propTypes;
LegacyWeb.defaultProps = defaultProps;

export default LegacyWeb;
