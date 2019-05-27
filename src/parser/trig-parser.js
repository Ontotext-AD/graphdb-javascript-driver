const ContentTypeParser = require('../parser/content-type-parser');
const RDFMimeType = require('../http/rdf-mime-type');
const Parser = require('n3').Parser;

/**
 * Parse TriG data to triple/quads
 *
 * @class
 * @author Mihail Radkov
 * @author Svilen Velikov
 */
class TriGParser extends ContentTypeParser {
  /**
   * @inheritDoc
   */
  constructor(isDefault) {
    super(isDefault);

    this.parser = new Parser({
      format: this.getSupportedType()
    });
  }

  /**
   * @inheritDoc
   */
  parse(content, config) {
    return this.parser.parse(content);
  }

  /**
   * @inheritDoc
   */
  getSupportedType() {
    return RDFMimeType.TRIG;
  }
}

module.exports = TriGParser;
