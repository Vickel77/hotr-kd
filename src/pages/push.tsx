import styled from "styled-components";
import Header from "../components/Header";
import Text from "../components/Text";
import Button from "../components/Button";

const Push = styled(({ className }) => {
  const prayerPoints = [
    {
      header: "Prayer for The Mission House",
      prayer: [
        "Prayer for God's favor upon the mission house",
        "everyone that steps in the mission house must experience a turn around",
        "Increase on every side",
        "Kingdom financers",
        "God bless the mission house",
      ],
    },
    {
      header: "Prayer for The Nigeria",
      prayer: [
        "Pray for God fearing leaders",
        "Pray for mercy on the nation",
        "God bless nigeria",
      ],
    },
    {
      header: "Prayer for The Family",
      prayer: [
        "Pray for God Protection on alll family members, at home and abroad",
        "Pray for God's favor and blessings upon your family",
        "God bless My Family",
      ],
    },
  ];

  prayerPoints.push({
    header: "21days push",
    prayer: [
      "The ten thousand sons and daughters are coming",
      "We have power in Christ",
      "From the east to the west we are blessed",
    ],
  });

  return (
    <>
      <div className={className}>
        <Header image="/push-w.jpg" mobImage="/push-m.jpg">
          <Text className="pageTitle" size="6" color="white">
            PUSH
          </Text>
        </Header>
        <div className="pageText">
          <Text color="primary" size="4">
            In House On the Rock We strongly believe in the efficacy of prayer{" "}
            <br /> hence we <strong> PUSH:</strong> <br />
            <b>P</b>ray <b>U</b>ntil <b>S</b>omething <b>H</b>appens
          </Text>
        </div>
        <div className="prayerWrap">
          {prayerPoints.map((PrayerPoint, idx) => (
            <div className="prayer" key={idx}>
              <Text className="" size="4" weight="bold" color="primary">
                {PrayerPoint.header}
              </Text>
              <Text className="" size="3" color="primary">
                {PrayerPoint.prayer.map((pray, idx) => (
                  <div className="prayerPoint">{`${idx + 1}. ${pray}`}</div>
                ))}
              </Text>
            </div>
          ))}
        </div>
        <form
          action="mailto:kelechialigwo77@gmail.com"
          className="prayerRequest">
          <textarea
            className="prayerField"
            placeholder="Enter Prayer Request"
            rows={1}></textarea>
          <Button size="3" type="submit" active>
            Send prayer
          </Button>
        </form>
      </div>
    </>
  );
})`
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  padding-bottom: 50px;

  .pageTitle {
    width: 60%;
    text-align: left;
  }
  .pageText {
    margin: 30px 10px;
  }
  .prayerWrap {
    width: 90%;
    margin: 50px auto 0;
  }
  .prayer {
    width: 70%;
    margin: 40px auto 0;
    padding: 30px 10px;
    border-radius: 20px;
    box-shadow: 0 2px 10px #ccc;
  }
  .prayer * {
    padding: 5px 0;
  }
  .prayerRequest {
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .prayerField {
    background: #eee;
    color: ${({ theme }) => theme.colors.primary};
    width: 50%;
    border: none;
    text-align: center;
    border-bottom: 1px solid transparent;
    outline: none;
    margin-right: 10px;
    resize: none;
  }
  .prayerField::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.2em;
  }
  .prayerField:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 600px) {
    overflow: hidden;
    .pageTitle {
      width: 100%;
      text-align: center;
    }
    .prayer {
      width: 80%;
    }
  }
`;

export default Push;
