import getAOSDefaultValue from "./get-aos-default-value";

export default function(aosVariable, aosValue) {
	const aosDefaultValue = getAOSDefaultValue(aosVariable);
	return aosDefaultValue == aosValue;
}
